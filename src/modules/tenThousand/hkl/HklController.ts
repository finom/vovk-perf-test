import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkl")
export default class HklController {
  @operation({
    summary: "Get Hkl",
  })
  @get()
  static getHkl = procedure({
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
