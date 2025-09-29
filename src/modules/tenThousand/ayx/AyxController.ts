import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayxes")
export default class AyxController {
  @operation({
    summary: "Get Ayxes",
  })
  @get()
  static getAyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayx",
  })
  @post("{id}")
  static createAyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
