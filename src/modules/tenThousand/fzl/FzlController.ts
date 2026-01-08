import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzl")
export default class FzlController {
  @operation({
    summary: "Get Fzl",
  })
  @get()
  static getFzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzl",
  })
  @post("{id}")
  static createFzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
