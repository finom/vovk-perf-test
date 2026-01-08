import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbr")
export default class DbrController {
  @operation({
    summary: "Get Dbr",
  })
  @get()
  static getDbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbr",
  })
  @post("{id}")
  static createDbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
