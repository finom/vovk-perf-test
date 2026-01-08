import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzq")
export default class FzqController {
  @operation({
    summary: "Get Fzq",
  })
  @get()
  static getFzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzq",
  })
  @post("{id}")
  static createFzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
