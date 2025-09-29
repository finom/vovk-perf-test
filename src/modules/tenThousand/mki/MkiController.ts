import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkis")
export default class MkiController {
  @operation({
    summary: "Get Mkis",
  })
  @get()
  static getMkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mki",
  })
  @post("{id}")
  static createMki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
