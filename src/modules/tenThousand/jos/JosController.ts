import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jos")
export default class JosController {
  @operation({
    summary: "Get Jos",
  })
  @get()
  static getJos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jos",
  })
  @post("{id}")
  static createJos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
