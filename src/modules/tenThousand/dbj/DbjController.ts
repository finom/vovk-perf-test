import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbj")
export default class DbjController {
  @operation({
    summary: "Get Dbj",
  })
  @get()
  static getDbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbj",
  })
  @post("{id}")
  static createDbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
