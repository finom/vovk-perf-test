import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbx")
export default class DbxController {
  @operation({
    summary: "Get Dbx",
  })
  @get()
  static getDbx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbx",
  })
  @post("{id}")
  static createDbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
