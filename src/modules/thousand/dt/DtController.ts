import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dts")
export default class DtController {
  @operation({
    summary: "Get Dts",
  })
  @get()
  static getDts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dt",
  })
  @post("{id}")
  static createDt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
