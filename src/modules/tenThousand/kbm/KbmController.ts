import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbm")
export default class KbmController {
  @operation({
    summary: "Get Kbm",
  })
  @get()
  static getKbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbm",
  })
  @post("{id}")
  static createKbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
