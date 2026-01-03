import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvts")
export default class MvtController {
  @operation({
    summary: "Get Mvts",
  })
  @get()
  static getMvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvt",
  })
  @post("{id}")
  static createMvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
