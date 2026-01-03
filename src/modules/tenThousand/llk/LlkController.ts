import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llks")
export default class LlkController {
  @operation({
    summary: "Get Llks",
  })
  @get()
  static getLlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llk",
  })
  @post("{id}")
  static createLlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
