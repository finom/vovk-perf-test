import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adbs")
export default class AdbController {
  @operation({
    summary: "Get Adbs",
  })
  @get()
  static getAdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adb",
  })
  @post("{id}")
  static createAdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
