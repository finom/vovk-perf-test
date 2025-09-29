import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhzs")
export default class DhzController {
  @operation({
    summary: "Get Dhzs",
  })
  @get()
  static getDhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhz",
  })
  @post("{id}")
  static createDhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
