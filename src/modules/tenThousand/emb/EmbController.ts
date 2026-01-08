import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emb")
export default class EmbController {
  @operation({
    summary: "Get Emb",
  })
  @get()
  static getEmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emb",
  })
  @post("{id}")
  static createEmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
