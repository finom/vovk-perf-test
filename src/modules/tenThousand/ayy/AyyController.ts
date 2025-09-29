import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayys")
export default class AyyController {
  @operation({
    summary: "Get Ayys",
  })
  @get()
  static getAyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayy",
  })
  @post("{id}")
  static createAyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
