import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltds")
export default class LtdController {
  @operation({
    summary: "Get Ltds",
  })
  @get()
  static getLtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltd",
  })
  @post("{id}")
  static createLtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
