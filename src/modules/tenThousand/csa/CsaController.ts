import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csa")
export default class CsaController {
  @operation({
    summary: "Get Csa",
  })
  @get()
  static getCsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csa",
  })
  @post("{id}")
  static createCsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
