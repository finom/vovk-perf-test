import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mim")
export default class MimController {
  @operation({
    summary: "Get Mim",
  })
  @get()
  static getMim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mim",
  })
  @post("{id}")
  static createMim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
