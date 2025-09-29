import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpies")
export default class JpyController {
  @operation({
    summary: "Get Jpies",
  })
  @get()
  static getJpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpy",
  })
  @post("{id}")
  static createJpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
