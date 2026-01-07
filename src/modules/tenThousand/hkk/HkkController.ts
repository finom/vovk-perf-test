import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkk")
export default class HkkController {
  @operation({
    summary: "Get Hkk",
  })
  @get()
  static getHkk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkk",
  })
  @post("{id}")
  static createHkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
