import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llb")
export default class LlbController {
  @operation({
    summary: "Get Llb",
  })
  @get()
  static getLlb = procedure({
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
