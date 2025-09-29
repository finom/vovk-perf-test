import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lias")
export default class LiaController {
  @operation({
    summary: "Get Lias",
  })
  @get()
  static getLias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lia",
  })
  @post("{id}")
  static createLia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
