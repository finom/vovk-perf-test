import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhxes")
export default class DhxController {
  @operation({
    summary: "Get Dhxes",
  })
  @get()
  static getDhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhx",
  })
  @post("{id}")
  static createDhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
