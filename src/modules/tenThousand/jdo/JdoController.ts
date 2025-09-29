import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdos")
export default class JdoController {
  @operation({
    summary: "Get Jdos",
  })
  @get()
  static getJdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdo",
  })
  @post("{id}")
  static createJdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
