import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngjs")
export default class NgjController {
  @operation({
    summary: "Get Ngjs",
  })
  @get()
  static getNgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngj",
  })
  @post("{id}")
  static createNgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
