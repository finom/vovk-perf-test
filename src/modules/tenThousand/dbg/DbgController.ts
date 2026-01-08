import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbg")
export default class DbgController {
  @operation({
    summary: "Get Dbg",
  })
  @get()
  static getDbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbg",
  })
  @post("{id}")
  static createDbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
