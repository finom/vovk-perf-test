import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llzs")
export default class LlzController {
  @operation({
    summary: "Get Llzs",
  })
  @get()
  static getLlzs = procedure({
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
