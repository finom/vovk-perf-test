import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpws")
export default class KpwController {
  @operation({
    summary: "Get Kpws",
  })
  @get()
  static getKpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpw",
  })
  @post("{id}")
  static createKpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
