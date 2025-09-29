import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsrs")
export default class BsrController {
  @operation({
    summary: "Get Bsrs",
  })
  @get()
  static getBsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsr",
  })
  @post("{id}")
  static createBsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
