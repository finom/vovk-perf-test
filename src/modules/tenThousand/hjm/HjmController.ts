import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjms")
export default class HjmController {
  @operation({
    summary: "Get Hjms",
  })
  @get()
  static getHjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjm",
  })
  @post("{id}")
  static createHjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
