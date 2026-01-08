import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbe")
export default class FbeController {
  @operation({
    summary: "Get Fbe",
  })
  @get()
  static getFbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbe",
  })
  @post("{id}")
  static createFbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
