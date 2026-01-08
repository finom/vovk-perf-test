import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbv")
export default class DbvController {
  @operation({
    summary: "Get Dbv",
  })
  @get()
  static getDbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbv",
  })
  @post("{id}")
  static createDbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
