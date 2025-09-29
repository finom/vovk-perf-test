import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljes")
export default class LjeController {
  @operation({
    summary: "Get Ljes",
  })
  @get()
  static getLjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lje",
  })
  @post("{id}")
  static createLje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
