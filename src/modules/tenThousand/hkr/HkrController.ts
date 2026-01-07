import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkr")
export default class HkrController {
  @operation({
    summary: "Get Hkr",
  })
  @get()
  static getHkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkr",
  })
  @post("{id}")
  static createHkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
