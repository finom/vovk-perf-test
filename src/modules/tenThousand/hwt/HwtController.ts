import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwts")
export default class HwtController {
  @operation({
    summary: "Get Hwts",
  })
  @get()
  static getHwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwt",
  })
  @post("{id}")
  static createHwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
