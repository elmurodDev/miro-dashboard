'use client'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {TbCreditCard} from "react-icons/tb";
import {IoCalendarOutline} from "react-icons/io5";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {PiCurrencyDollar} from "react-icons/pi";
import {HiOutlineUsers} from "react-icons/hi";
import {FiActivity} from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Page = () => {
  return (
    <div>
      <Tabs defaultValue="week">
        <TabsList>
          <TabsTrigger value="calendar" className={"flex items-center gap-2"}>
            <IoCalendarOutline className={"icon-sm"}/>
            Jan 20, 2023 - Feb 09, 2023
          </TabsTrigger>
          <TabsTrigger value="month">28 days</TabsTrigger>
          <TabsTrigger value="twoweeks">14 days</TabsTrigger>
          <TabsTrigger value="week">7 days</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <PiCurrencyDollar className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <HiOutlineUsers className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <TbCreditCard className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <FiActivity className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <div className={"grid grid-cols-12 mt-5 gap-6"}>
            <Card x-chunk="dashboard-05-chunk-3" className={"col-span-6"}>
              <CardContent className={"p-1"}>
                <Table className={"text-xs"}>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead className="hidden sm:table-cell">Screens</TableHead>
                      <TableHead className="hidden sm:table-cell">Screen views</TableHead>
                      <TableHead className="hidden md:table-cell">Exits</TableHead>
                      <TableHead>Drop-off rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className={"p-0"}>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">1</TableCell>
                      <TableCell>
                        <div className="font-medium">start</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">13</TableCell>
                      <TableCell className="hidden md:table-cell">9</TableCell>
                      <TableCell>69%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">2</TableCell>
                      <TableCell>
                        <div className="font-medium">marketing-channels</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">6</TableCell>
                      <TableCell className="hidden md:table-cell">3</TableCell>
                      <TableCell>50%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">1</TableCell>
                      <TableCell>
                        <div className="font-medium">start</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">13</TableCell>
                      <TableCell className="hidden md:table-cell">9</TableCell>
                      <TableCell>69%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">2</TableCell>
                      <TableCell>
                        <div className="font-medium">marketing-channels</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">6</TableCell>
                      <TableCell className="hidden md:table-cell">3</TableCell>
                      <TableCell>50%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">1</TableCell>
                      <TableCell>
                        <div className="font-medium">start</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">13</TableCell>
                      <TableCell className="hidden md:table-cell">9</TableCell>
                      <TableCell>69%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">2</TableCell>
                      <TableCell>
                        <div className="font-medium">marketing-channels</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">6</TableCell>
                      <TableCell className="hidden md:table-cell">3</TableCell>
                      <TableCell>50%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">1</TableCell>
                      <TableCell>
                        <div className="font-medium">start</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">13</TableCell>
                      <TableCell className="hidden md:table-cell">9</TableCell>
                      <TableCell>69%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">2</TableCell>
                      <TableCell>
                        <div className="font-medium">marketing-channels</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">6</TableCell>
                      <TableCell className="hidden md:table-cell">3</TableCell>
                      <TableCell>50%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;