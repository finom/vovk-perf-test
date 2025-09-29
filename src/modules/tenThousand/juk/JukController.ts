import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juks")
export default class JukController {
  @operation({
    summary: "Get Juks",
  })
  @get()
  static getJuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juk",
  })
  @post("{id}")
  static createJuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
