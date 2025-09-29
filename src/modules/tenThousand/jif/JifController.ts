import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jifs")
export default class JifController {
  @operation({
    summary: "Get Jifs",
  })
  @get()
  static getJifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jif",
  })
  @post("{id}")
  static createJif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
