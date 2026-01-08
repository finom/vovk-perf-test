import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbm")
export default class BbmController {
  @operation({
    summary: "Get Bbm",
  })
  @get()
  static getBbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbm",
  })
  @post("{id}")
  static createBbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
