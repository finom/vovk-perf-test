import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwts")
export default class CwtController {
  @operation({
    summary: "Get Cwts",
  })
  @get()
  static getCwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwt",
  })
  @post("{id}")
  static createCwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
