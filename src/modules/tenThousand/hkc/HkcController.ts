import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkcs")
export default class HkcController {
  @operation({
    summary: "Get Hkcs",
  })
  @get()
  static getHkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkc",
  })
  @post("{id}")
  static createHkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
