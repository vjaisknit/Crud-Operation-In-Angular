using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularTutorialAPI.Migrations
{
    public partial class addCascadingDropdown : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CountryMst",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    countryName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CountryMst", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "StateMst",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    stateName = table.Column<string>(nullable: true),
                    CountryMstid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StateMst", x => x.id);
                    table.ForeignKey(
                        name: "FK_StateMst_CountryMst_CountryMstid",
                        column: x => x.CountryMstid,
                        principalTable: "CountryMst",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StateMst_CountryMstid",
                table: "StateMst",
                column: "CountryMstid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StateMst");

            migrationBuilder.DropTable(
                name: "CountryMst");
        }
    }
}
