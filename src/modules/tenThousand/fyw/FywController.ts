import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyws")
export default class FywController {
  @operation({
    summary: "Get Fyws",
  })
  @get()
  static getFyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyw",
  })
  @post("{id}")
  static createFyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
