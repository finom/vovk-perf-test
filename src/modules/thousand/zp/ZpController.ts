import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zp")
export default class ZpController {
  @operation({
    summary: "Get Zp",
  })
  @get()
  static getZp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zp",
  })
  @post("{id}")
  static createZp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
