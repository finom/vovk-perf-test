import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akus")
export default class AkuController {
  @operation({
    summary: "Get Akus",
  })
  @get()
  static getAkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aku",
  })
  @post("{id}")
  static createAku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
