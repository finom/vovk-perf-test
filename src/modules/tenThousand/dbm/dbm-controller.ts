import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbm")
export default class DbmController {
  @operation({
    summary: "Get Dbm",
  })
  @get()
  static getDbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbm",
  })
  @post("{id}")
  static createDbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
