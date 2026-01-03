import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkls")
export default class HklController {
  @operation({
    summary: "Get Hkls",
  })
  @get()
  static getHkls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkl",
  })
  @post("{id}")
  static createHkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
