import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkrs")
export default class HkrController {
  @operation({
    summary: "Get Hkrs",
  })
  @get()
  static getHkrs = procedure({
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
