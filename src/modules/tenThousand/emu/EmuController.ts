import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emus")
export default class EmuController {
  @operation({
    summary: "Get Emus",
  })
  @get()
  static getEmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emu",
  })
  @post("{id}")
  static createEmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
