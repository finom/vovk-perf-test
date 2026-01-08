import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lix")
export default class LixController {
  @operation({
    summary: "Get Lix",
  })
  @get()
  static getLix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lix",
  })
  @post("{id}")
  static createLix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
