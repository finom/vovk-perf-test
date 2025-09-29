import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("doys")
export default class DoyController {
  @operation({
    summary: "Get Doys",
  })
  @get()
  static getDoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doy",
  })
  @post("{id}")
  static createDoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
