import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llbs")
export default class LlbController {
  @operation({
    summary: "Get Llbs",
  })
  @get()
  static getLlbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llb",
  })
  @post("{id}")
  static createLlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
