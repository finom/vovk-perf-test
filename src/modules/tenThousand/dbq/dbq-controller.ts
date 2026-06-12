import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbq")
export default class DbqController {
  @operation({
    summary: "Get Dbq",
  })
  @get()
  static getDbq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbq",
  })
  @post("{id}")
  static createDbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
