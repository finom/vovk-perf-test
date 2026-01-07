import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zq")
export default class ZqController {
  @operation({
    summary: "Get Zq",
  })
  @get()
  static getZq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zq",
  })
  @post("{id}")
  static createZq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
