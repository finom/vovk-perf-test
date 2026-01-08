import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esa")
export default class EsaController {
  @operation({
    summary: "Get Esa",
  })
  @get()
  static getEsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esa",
  })
  @post("{id}")
  static createEsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
