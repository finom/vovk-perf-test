import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzp")
export default class FzpController {
  @operation({
    summary: "Get Fzp",
  })
  @get()
  static getFzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzp",
  })
  @post("{id}")
  static createFzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
