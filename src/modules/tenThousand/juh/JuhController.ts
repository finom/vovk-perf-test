import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juhs")
export default class JuhController {
  @operation({
    summary: "Get Juhs",
  })
  @get()
  static getJuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juh",
  })
  @post("{id}")
  static createJuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
