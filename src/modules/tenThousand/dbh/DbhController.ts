import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbh")
export default class DbhController {
  @operation({
    summary: "Get Dbh",
  })
  @get()
  static getDbh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbh",
  })
  @post("{id}")
  static createDbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
