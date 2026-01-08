import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lim")
export default class LimController {
  @operation({
    summary: "Get Lim",
  })
  @get()
  static getLim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lim",
  })
  @post("{id}")
  static createLim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
