import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmes")
export default class JmeController {
  @operation({
    summary: "Get Jmes",
  })
  @get()
  static getJmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jme",
  })
  @post("{id}")
  static createJme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
