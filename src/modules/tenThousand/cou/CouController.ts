import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cous")
export default class CouController {
  @operation({
    summary: "Get Cous",
  })
  @get()
  static getCous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cou",
  })
  @post("{id}")
  static createCou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
