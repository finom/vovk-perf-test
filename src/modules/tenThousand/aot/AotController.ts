import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aots")
export default class AotController {
  @operation({
    summary: "Get Aots",
  })
  @get()
  static getAots = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aot",
  })
  @post("{id}")
  static createAot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
