import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkf")
export default class HkfController {
  @operation({
    summary: "Get Hkf",
  })
  @get()
  static getHkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkf",
  })
  @post("{id}")
  static createHkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
