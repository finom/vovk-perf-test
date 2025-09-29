import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhbs")
export default class DhbController {
  @operation({
    summary: "Get Dhbs",
  })
  @get()
  static getDhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhb",
  })
  @post("{id}")
  static createDhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
