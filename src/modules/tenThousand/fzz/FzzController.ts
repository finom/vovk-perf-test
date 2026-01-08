import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzz")
export default class FzzController {
  @operation({
    summary: "Get Fzz",
  })
  @get()
  static getFzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzz",
  })
  @post("{id}")
  static createFzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
