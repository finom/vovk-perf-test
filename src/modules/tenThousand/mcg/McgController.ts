import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcgs")
export default class McgController {
  @operation({
    summary: "Get Mcgs",
  })
  @get()
  static getMcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcg",
  })
  @post("{id}")
  static createMcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
