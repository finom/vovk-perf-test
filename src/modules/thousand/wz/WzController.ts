import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wzs")
export default class WzController {
  @operation({
    summary: "Get Wzs",
  })
  @get()
  static getWzs = procedure({
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
