import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsus")
export default class DsuController {
  @operation({
    summary: "Get Dsus",
  })
  @get()
  static getDsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsu",
  })
  @post("{id}")
  static createDsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
