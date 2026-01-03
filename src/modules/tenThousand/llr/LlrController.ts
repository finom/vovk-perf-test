import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llrs")
export default class LlrController {
  @operation({
    summary: "Get Llrs",
  })
  @get()
  static getLlrs = procedure({
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
