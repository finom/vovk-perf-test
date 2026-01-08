import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lda")
export default class LdaController {
  @operation({
    summary: "Get Lda",
  })
  @get()
  static getLda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lda",
  })
  @post("{id}")
  static createLda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
