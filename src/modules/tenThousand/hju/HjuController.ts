import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjus")
export default class HjuController {
  @operation({
    summary: "Get Hjus",
  })
  @get()
  static getHjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hju",
  })
  @post("{id}")
  static createHju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
