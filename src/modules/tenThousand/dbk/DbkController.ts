import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbk")
export default class DbkController {
  @operation({
    summary: "Get Dbk",
  })
  @get()
  static getDbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbk",
  })
  @post("{id}")
  static createDbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
