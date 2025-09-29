import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deds")
export default class DedController {
  @operation({
    summary: "Get Deds",
  })
  @get()
  static getDeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ded",
  })
  @post("{id}")
  static createDed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
