import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llms")
export default class LlmController {
  @operation({
    summary: "Get Llms",
  })
  @get()
  static getLlms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llm",
  })
  @post("{id}")
  static createLlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
