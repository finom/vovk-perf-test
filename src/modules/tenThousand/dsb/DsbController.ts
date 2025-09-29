import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsbs")
export default class DsbController {
  @operation({
    summary: "Get Dsbs",
  })
  @get()
  static getDsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsb",
  })
  @post("{id}")
  static createDsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
