import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dczs")
export default class DczController {
  @operation({
    summary: "Get Dczs",
  })
  @get()
  static getDczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcz",
  })
  @post("{id}")
  static createDcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
