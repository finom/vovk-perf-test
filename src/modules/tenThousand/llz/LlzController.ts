import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llz")
export default class LlzController {
  @operation({
    summary: "Get Llz",
  })
  @get()
  static getLlz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llz",
  })
  @post("{id}")
  static createLlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
