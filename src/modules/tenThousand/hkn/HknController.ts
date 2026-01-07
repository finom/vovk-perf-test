import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkn")
export default class HknController {
  @operation({
    summary: "Get Hkn",
  })
  @get()
  static getHkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkn",
  })
  @post("{id}")
  static createHkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
