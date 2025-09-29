import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blas")
export default class BlaController {
  @operation({
    summary: "Get Blas",
  })
  @get()
  static getBlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bla",
  })
  @post("{id}")
  static createBla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
