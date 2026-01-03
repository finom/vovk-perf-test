import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heks")
export default class HekController {
  @operation({
    summary: "Get Heks",
  })
  @get()
  static getHeks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hek",
  })
  @post("{id}")
  static createHek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
