import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llhs")
export default class LlhController {
  @operation({
    summary: "Get Llhs",
  })
  @get()
  static getLlhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llh",
  })
  @post("{id}")
  static createLlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
