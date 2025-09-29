import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsos")
export default class JsoController {
  @operation({
    summary: "Get Jsos",
  })
  @get()
  static getJsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jso",
  })
  @post("{id}")
  static createJso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
