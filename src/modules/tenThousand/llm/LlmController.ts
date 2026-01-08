import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llm")
export default class LlmController {
  @operation({
    summary: "Get Llm",
  })
  @get()
  static getLlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llm",
  })
  @post("{id}")
  static createLlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
