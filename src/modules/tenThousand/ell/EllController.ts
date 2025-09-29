import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ells")
export default class EllController {
  @operation({
    summary: "Get Ells",
  })
  @get()
  static getElls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ell",
  })
  @post("{id}")
  static createEll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
