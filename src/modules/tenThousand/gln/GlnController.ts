import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gln")
export default class GlnController {
  @operation({
    summary: "Get Gln",
  })
  @get()
  static getGln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gln",
  })
  @post("{id}")
  static createGln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
