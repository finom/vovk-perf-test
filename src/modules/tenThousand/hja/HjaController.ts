import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjas")
export default class HjaController {
  @operation({
    summary: "Get Hjas",
  })
  @get()
  static getHjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hja",
  })
  @post("{id}")
  static createHja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
