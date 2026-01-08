import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxr")
export default class BxrController {
  @operation({
    summary: "Get Bxr",
  })
  @get()
  static getBxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxr",
  })
  @post("{id}")
  static createBxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
