import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bld")
export default class BldController {
  @operation({
    summary: "Get Bld",
  })
  @get()
  static getBld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bld",
  })
  @post("{id}")
  static createBld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
