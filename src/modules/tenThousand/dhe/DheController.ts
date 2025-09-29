import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhes")
export default class DheController {
  @operation({
    summary: "Get Dhes",
  })
  @get()
  static getDhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhe",
  })
  @post("{id}")
  static createDhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
