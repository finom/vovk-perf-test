import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftts")
export default class FttController {
  @operation({
    summary: "Get Ftts",
  })
  @get()
  static getFtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftt",
  })
  @post("{id}")
  static createFtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
