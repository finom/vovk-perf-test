import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esq")
export default class EsqController {
  @operation({
    summary: "Get Esq",
  })
  @get()
  static getEsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esq",
  })
  @post("{id}")
  static createEsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
