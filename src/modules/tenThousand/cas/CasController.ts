import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cas")
export default class CasController {
  @operation({
    summary: "Get Cas",
  })
  @get()
  static getCas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cas",
  })
  @post("{id}")
  static createCas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
