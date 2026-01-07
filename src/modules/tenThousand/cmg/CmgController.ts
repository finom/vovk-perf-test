import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmg")
export default class CmgController {
  @operation({
    summary: "Get Cmg",
  })
  @get()
  static getCmg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmg",
  })
  @post("{id}")
  static createCmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
