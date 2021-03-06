USE [master]
GO
/****** Object:  Database [EmployeeLeaveDb]    Script Date: 27-03-2020 20:07:48 ******/
CREATE DATABASE [EmployeeLeaveDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'EmployeeLeaveDb', FILENAME = N'D:\Gagan\Program Files\Microsoft Sql Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\EmployeeLeaveDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'EmployeeLeaveDb_log', FILENAME = N'D:\Gagan\Program Files\Microsoft Sql Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\EmployeeLeaveDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [EmployeeLeaveDb] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EmployeeLeaveDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EmployeeLeaveDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EmployeeLeaveDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EmployeeLeaveDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [EmployeeLeaveDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EmployeeLeaveDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET RECOVERY FULL 
GO
ALTER DATABASE [EmployeeLeaveDb] SET  MULTI_USER 
GO
ALTER DATABASE [EmployeeLeaveDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EmployeeLeaveDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EmployeeLeaveDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EmployeeLeaveDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [EmployeeLeaveDb] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'EmployeeLeaveDb', N'ON'
GO
ALTER DATABASE [EmployeeLeaveDb] SET QUERY_STORE = OFF
GO
USE [EmployeeLeaveDb]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 27-03-2020 20:07:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[EmployeId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeLeaves]    Script Date: 27-03-2020 20:07:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeLeaves](
	[EmployeeLeaveId] [int] IDENTITY(1,1) NOT NULL,
	[LeaveStartDate] [date] NOT NULL,
	[LeaveEndDate] [date] NOT NULL,
	[EmployeId] [int] NOT NULL,
 CONSTRAINT [PK_EmployeeLeaves] PRIMARY KEY CLUSTERED 
(
	[EmployeeLeaveId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[vLeaves]    Script Date: 27-03-2020 20:07:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vLeaves]
AS
SELECT dbo.Employees.EmployeName, dbo.EmployeeLeaves.LeaveStartDate, dbo.EmployeeLeaves.LeaveEndDate, dbo.EmployeeLeaves.EmployeeLeaveId
FROM   dbo.Employees INNER JOIN
             dbo.EmployeeLeaves ON dbo.Employees.EmployeId = dbo.EmployeeLeaves.EmployeId
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 27-03-2020 20:07:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmployeeLeaves]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeLeaves_Employees] FOREIGN KEY([EmployeId])
REFERENCES [dbo].[Employees] ([EmployeId])
GO
ALTER TABLE [dbo].[EmployeeLeaves] CHECK CONSTRAINT [FK_EmployeeLeaves_Employees]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Employees"
            Begin Extent = 
               Top = 9
               Left = 57
               Bottom = 152
               Right = 279
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "EmployeeLeaves"
            Begin Extent = 
               Top = 9
               Left = 336
               Bottom = 206
               Right = 578
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vLeaves'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vLeaves'
GO
USE [master]
GO
ALTER DATABASE [EmployeeLeaveDb] SET  READ_WRITE 
GO
