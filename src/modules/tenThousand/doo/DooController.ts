import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("doos")
export default class DooController {
  @operation({
    summary: "Get Doos",
  })
  @get()
  static getDoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doo",
  })
  @post("{id}")
  static createDoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
