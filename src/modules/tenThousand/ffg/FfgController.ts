import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffg")
export default class FfgController {
  @operation({
    summary: "Get Ffg",
  })
  @get()
  static getFfg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffg",
  })
  @post("{id}")
  static createFfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
