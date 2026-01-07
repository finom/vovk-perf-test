import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixz")
export default class IxzController {
  @operation({
    summary: "Get Ixz",
  })
  @get()
  static getIxz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixz",
  })
  @post("{id}")
  static createIxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
