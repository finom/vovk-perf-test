import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhps")
export default class DhpController {
  @operation({
    summary: "Get Dhps",
  })
  @get()
  static getDhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhp",
  })
  @post("{id}")
  static createDhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
