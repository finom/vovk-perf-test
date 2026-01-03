import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ists")
export default class IstController {
  @operation({
    summary: "Get Ists",
  })
  @get()
  static getIsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ist",
  })
  @post("{id}")
  static createIst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
