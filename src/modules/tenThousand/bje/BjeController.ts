import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjes")
export default class BjeController {
  @operation({
    summary: "Get Bjes",
  })
  @get()
  static getBjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bje",
  })
  @post("{id}")
  static createBje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
