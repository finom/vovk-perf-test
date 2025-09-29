import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abrs")
export default class AbrController {
  @operation({
    summary: "Get Abrs",
  })
  @get()
  static getAbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abr",
  })
  @post("{id}")
  static createAbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
