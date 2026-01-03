import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsis")
export default class GsiController {
  @operation({
    summary: "Get Gsis",
  })
  @get()
  static getGsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsi",
  })
  @post("{id}")
  static createGsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
