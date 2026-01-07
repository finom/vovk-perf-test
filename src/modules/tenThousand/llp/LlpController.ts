import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llp")
export default class LlpController {
  @operation({
    summary: "Get Llp",
  })
  @get()
  static getLlp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llp",
  })
  @post("{id}")
  static createLlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
