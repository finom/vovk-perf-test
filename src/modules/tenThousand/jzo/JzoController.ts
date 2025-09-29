import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzos")
export default class JzoController {
  @operation({
    summary: "Get Jzos",
  })
  @get()
  static getJzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzo",
  })
  @post("{id}")
  static createJzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
