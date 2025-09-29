import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csrs")
export default class CsrController {
  @operation({
    summary: "Get Csrs",
  })
  @get()
  static getCsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csr",
  })
  @post("{id}")
  static createCsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
