import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wz")
export default class WzController {
  @operation({
    summary: "Get Wz",
  })
  @get()
  static getWz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wz",
  })
  @post("{id}")
  static createWz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
