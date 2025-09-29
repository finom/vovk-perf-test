import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbes")
export default class JbeController {
  @operation({
    summary: "Get Jbes",
  })
  @get()
  static getJbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbe",
  })
  @post("{id}")
  static createJbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
