import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xzs")
export default class XzController {
  @operation({
    summary: "Get Xzs",
  })
  @get()
  static getXzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xz",
  })
  @post("{id}")
  static createXz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
