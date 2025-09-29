import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laos")
export default class LaoController {
  @operation({
    summary: "Get Laos",
  })
  @get()
  static getLaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lao",
  })
  @post("{id}")
  static createLao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
