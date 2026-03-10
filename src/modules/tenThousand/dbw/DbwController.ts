import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbw")
export default class DbwController {
  @operation({
    summary: "Get Dbw",
  })
  @get()
  static getDbw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbw",
  })
  @post("{id}")
  static createDbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
