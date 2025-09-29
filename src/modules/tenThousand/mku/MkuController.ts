import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkus")
export default class MkuController {
  @operation({
    summary: "Get Mkus",
  })
  @get()
  static getMkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mku",
  })
  @post("{id}")
  static createMku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
