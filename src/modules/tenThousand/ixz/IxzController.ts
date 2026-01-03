import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixzs")
export default class IxzController {
  @operation({
    summary: "Get Ixzs",
  })
  @get()
  static getIxzs = procedure({
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
