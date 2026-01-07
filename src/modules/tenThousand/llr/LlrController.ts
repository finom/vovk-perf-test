import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llr")
export default class LlrController {
  @operation({
    summary: "Get Llr",
  })
  @get()
  static getLlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llr",
  })
  @post("{id}")
  static createLlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
