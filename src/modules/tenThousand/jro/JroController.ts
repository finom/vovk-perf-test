import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jros")
export default class JroController {
  @operation({
    summary: "Get Jros",
  })
  @get()
  static getJros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jro",
  })
  @post("{id}")
  static createJro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
