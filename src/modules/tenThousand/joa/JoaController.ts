import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joas")
export default class JoaController {
  @operation({
    summary: "Get Joas",
  })
  @get()
  static getJoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joa",
  })
  @post("{id}")
  static createJoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
