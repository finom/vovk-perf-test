import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfp")
export default class GfpController {
  @operation({
    summary: "Get Gfp",
  })
  @get()
  static getGfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfp",
  })
  @post("{id}")
  static createGfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
