import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkcs")
export default class MkcController {
  @operation({
    summary: "Get Mkcs",
  })
  @get()
  static getMkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkc",
  })
  @post("{id}")
  static createMkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
