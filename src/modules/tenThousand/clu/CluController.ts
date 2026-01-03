import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clus")
export default class CluController {
  @operation({
    summary: "Get Clus",
  })
  @get()
  static getClus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clu",
  })
  @post("{id}")
  static createClu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
