import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zps")
export default class ZpController {
  @operation({
    summary: "Get Zps",
  })
  @get()
  static getZps = procedure({
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
