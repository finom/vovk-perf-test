import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkjs")
export default class MkjController {
  @operation({
    summary: "Get Mkjs",
  })
  @get()
  static getMkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkj",
  })
  @post("{id}")
  static createMkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
