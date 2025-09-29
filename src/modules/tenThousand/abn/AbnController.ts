import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abns")
export default class AbnController {
  @operation({
    summary: "Get Abns",
  })
  @get()
  static getAbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abn",
  })
  @post("{id}")
  static createAbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
