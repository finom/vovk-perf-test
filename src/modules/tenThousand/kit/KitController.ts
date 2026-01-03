import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kits")
export default class KitController {
  @operation({
    summary: "Get Kits",
  })
  @get()
  static getKits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kit",
  })
  @post("{id}")
  static createKit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
