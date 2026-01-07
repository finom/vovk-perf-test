import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zz")
export default class ZzController {
  @operation({
    summary: "Get Zz",
  })
  @get()
  static getZz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zz",
  })
  @post("{id}")
  static createZz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
