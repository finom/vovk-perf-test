import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkxes")
export default class HkxController {
  @operation({
    summary: "Get Hkxes",
  })
  @get()
  static getHkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkx",
  })
  @post("{id}")
  static createHkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
