import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juws")
export default class JuwController {
  @operation({
    summary: "Get Juws",
  })
  @get()
  static getJuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juw",
  })
  @post("{id}")
  static createJuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
