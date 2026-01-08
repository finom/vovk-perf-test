import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmc")
export default class CmcController {
  @operation({
    summary: "Get Cmc",
  })
  @get()
  static getCmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmc",
  })
  @post("{id}")
  static createCmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
