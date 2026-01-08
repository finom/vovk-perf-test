import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzf")
export default class FzfController {
  @operation({
    summary: "Get Fzf",
  })
  @get()
  static getFzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzf",
  })
  @post("{id}")
  static createFzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
