import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfn")
export default class GfnController {
  @operation({
    summary: "Get Gfn",
  })
  @get()
  static getGfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfn",
  })
  @post("{id}")
  static createGfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
