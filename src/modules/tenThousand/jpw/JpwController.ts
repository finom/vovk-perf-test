import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpws")
export default class JpwController {
  @operation({
    summary: "Get Jpws",
  })
  @get()
  static getJpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpw",
  })
  @post("{id}")
  static createJpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
