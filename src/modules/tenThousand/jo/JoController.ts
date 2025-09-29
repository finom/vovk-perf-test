import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jos")
export default class JoController {
  @operation({
    summary: "Get Jos",
  })
  @get()
  static getJos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jo",
  })
  @post("{id}")
  static createJo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
