import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adbs")
export default class AdbController {
  @operation({
    summary: "Get Adbs",
  })
  @get()
  static getAdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adb",
  })
  @post("{id}")
  static createAdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
