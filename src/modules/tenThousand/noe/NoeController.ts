import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noes")
export default class NoeController {
  @operation({
    summary: "Get Noes",
  })
  @get()
  static getNoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noe",
  })
  @post("{id}")
  static createNoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
