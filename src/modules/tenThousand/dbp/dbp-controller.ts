import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbp")
export default class DbpController {
  @operation({
    summary: "Get Dbp",
  })
  @get()
  static getDbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbp",
  })
  @post("{id}")
  static createDbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
