import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkos")
export default class MkoController {
  @operation({
    summary: "Get Mkos",
  })
  @get()
  static getMkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mko",
  })
  @post("{id}")
  static createMko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
