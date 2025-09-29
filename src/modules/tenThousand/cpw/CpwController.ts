import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpws")
export default class CpwController {
  @operation({
    summary: "Get Cpws",
  })
  @get()
  static getCpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpw",
  })
  @post("{id}")
  static createCpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
