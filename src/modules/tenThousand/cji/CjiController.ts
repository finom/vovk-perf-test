import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cji")
export default class CjiController {
  @operation({
    summary: "Get Cji",
  })
  @get()
  static getCji = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cji",
  })
  @post("{id}")
  static createCji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
