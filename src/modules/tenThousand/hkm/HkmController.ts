import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkms")
export default class HkmController {
  @operation({
    summary: "Get Hkms",
  })
  @get()
  static getHkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkm",
  })
  @post("{id}")
  static createHkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
