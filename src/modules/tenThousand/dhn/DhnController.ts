import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhns")
export default class DhnController {
  @operation({
    summary: "Get Dhns",
  })
  @get()
  static getDhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhn",
  })
  @post("{id}")
  static createDhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
