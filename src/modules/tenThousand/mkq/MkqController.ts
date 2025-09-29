import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkqs")
export default class MkqController {
  @operation({
    summary: "Get Mkqs",
  })
  @get()
  static getMkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkq",
  })
  @post("{id}")
  static createMkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
