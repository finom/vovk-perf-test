import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpzs")
export default class JpzController {
  @operation({
    summary: "Get Jpzs",
  })
  @get()
  static getJpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpz",
  })
  @post("{id}")
  static createJpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
