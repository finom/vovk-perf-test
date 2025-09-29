import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cus")
export default class CuController {
  @operation({
    summary: "Get Cus",
  })
  @get()
  static getCus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cu",
  })
  @post("{id}")
  static createCu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
