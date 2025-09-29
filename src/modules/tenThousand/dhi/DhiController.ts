import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhis")
export default class DhiController {
  @operation({
    summary: "Get Dhis",
  })
  @get()
  static getDhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhi",
  })
  @post("{id}")
  static createDhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
