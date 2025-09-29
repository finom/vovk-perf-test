import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btes")
export default class BteController {
  @operation({
    summary: "Get Btes",
  })
  @get()
  static getBtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bte",
  })
  @post("{id}")
  static createBte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
