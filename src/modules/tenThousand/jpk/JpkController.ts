import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpks")
export default class JpkController {
  @operation({
    summary: "Get Jpks",
  })
  @get()
  static getJpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpk",
  })
  @post("{id}")
  static createJpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
