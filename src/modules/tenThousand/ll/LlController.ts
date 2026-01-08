import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ll")
export default class LlController {
  @operation({
    summary: "Get Ll",
  })
  @get()
  static getLl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ll",
  })
  @post("{id}")
  static createLl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
