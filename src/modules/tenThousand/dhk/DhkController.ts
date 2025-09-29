import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhks")
export default class DhkController {
  @operation({
    summary: "Get Dhks",
  })
  @get()
  static getDhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhk",
  })
  @post("{id}")
  static createDhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
