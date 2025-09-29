import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhrs")
export default class DhrController {
  @operation({
    summary: "Get Dhrs",
  })
  @get()
  static getDhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhr",
  })
  @post("{id}")
  static createDhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
