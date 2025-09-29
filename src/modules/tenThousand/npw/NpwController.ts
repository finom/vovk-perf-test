import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npws")
export default class NpwController {
  @operation({
    summary: "Get Npws",
  })
  @get()
  static getNpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npw",
  })
  @post("{id}")
  static createNpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
