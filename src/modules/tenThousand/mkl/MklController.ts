import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkls")
export default class MklController {
  @operation({
    summary: "Get Mkls",
  })
  @get()
  static getMkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkl",
  })
  @post("{id}")
  static createMkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
