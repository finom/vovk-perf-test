import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ist")
export default class IstController {
  @operation({
    summary: "Get Ist",
  })
  @get()
  static getIst = procedure({
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
