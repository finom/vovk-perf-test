import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsc")
export default class LscController {
  @operation({
    summary: "Get Lsc",
  })
  @get()
  static getLsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsc",
  })
  @post("{id}")
  static createLsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
