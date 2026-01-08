import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggm")
export default class GgmController {
  @operation({
    summary: "Get Ggm",
  })
  @get()
  static getGgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggm",
  })
  @post("{id}")
  static createGgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
