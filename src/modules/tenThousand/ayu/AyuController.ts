import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayus")
export default class AyuController {
  @operation({
    summary: "Get Ayus",
  })
  @get()
  static getAyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayu",
  })
  @post("{id}")
  static createAyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
