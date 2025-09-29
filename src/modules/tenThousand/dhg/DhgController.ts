import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhgs")
export default class DhgController {
  @operation({
    summary: "Get Dhgs",
  })
  @get()
  static getDhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhg",
  })
  @post("{id}")
  static createDhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
