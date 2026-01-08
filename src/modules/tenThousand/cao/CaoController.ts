import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cao")
export default class CaoController {
  @operation({
    summary: "Get Cao",
  })
  @get()
  static getCao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cao",
  })
  @post("{id}")
  static createCao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
