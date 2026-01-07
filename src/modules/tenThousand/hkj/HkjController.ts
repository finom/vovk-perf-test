import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkj")
export default class HkjController {
  @operation({
    summary: "Get Hkj",
  })
  @get()
  static getHkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkj",
  })
  @post("{id}")
  static createHkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
