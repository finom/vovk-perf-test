import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcw")
export default class BcwController {
  @operation({
    summary: "Get Bcw",
  })
  @get()
  static getBcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcw",
  })
  @post("{id}")
  static createBcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
