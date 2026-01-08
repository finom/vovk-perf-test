import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmd")
export default class BmdController {
  @operation({
    summary: "Get Bmd",
  })
  @get()
  static getBmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmd",
  })
  @post("{id}")
  static createBmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
