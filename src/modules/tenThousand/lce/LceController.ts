import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lce")
export default class LceController {
  @operation({
    summary: "Get Lce",
  })
  @get()
  static getLce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lce",
  })
  @post("{id}")
  static createLce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
