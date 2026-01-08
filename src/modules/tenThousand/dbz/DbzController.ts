import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbz")
export default class DbzController {
  @operation({
    summary: "Get Dbz",
  })
  @get()
  static getDbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbz",
  })
  @post("{id}")
  static createDbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
