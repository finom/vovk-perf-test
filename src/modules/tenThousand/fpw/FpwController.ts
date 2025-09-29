import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpws")
export default class FpwController {
  @operation({
    summary: "Get Fpws",
  })
  @get()
  static getFpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpw",
  })
  @post("{id}")
  static createFpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
