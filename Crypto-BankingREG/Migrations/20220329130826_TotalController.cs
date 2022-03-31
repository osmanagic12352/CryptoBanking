using Microsoft.EntityFrameworkCore.Migrations;

namespace Crypto_BankingREG.Migrations
{
    public partial class TotalController : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Total",
                table: "Transaction",
                type: "nvarchar (100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Total",
                table: "Transaction");
        }
    }
}
