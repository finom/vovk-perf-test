import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhws")
export default class DhwController {
  @operation({
    summary: "Get Dhws",
  })
  @get()
  static getDhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhw",
  })
  @post("{id}")
  static createDhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
