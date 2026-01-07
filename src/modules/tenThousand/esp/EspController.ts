import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esp")
export default class EspController {
  @operation({
    summary: "Get Esp",
  })
  @get()
  static getEsp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esp",
  })
  @post("{id}")
  static createEsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
