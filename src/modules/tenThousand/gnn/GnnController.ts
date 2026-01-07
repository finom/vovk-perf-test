import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnn")
export default class GnnController {
  @operation({
    summary: "Get Gnn",
  })
  @get()
  static getGnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnn",
  })
  @post("{id}")
  static createGnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
