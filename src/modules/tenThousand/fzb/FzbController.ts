import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzb")
export default class FzbController {
  @operation({
    summary: "Get Fzb",
  })
  @get()
  static getFzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzb",
  })
  @post("{id}")
  static createFzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
