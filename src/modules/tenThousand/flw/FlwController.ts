import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flws")
export default class FlwController {
  @operation({
    summary: "Get Flws",
  })
  @get()
  static getFlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flw",
  })
  @post("{id}")
  static createFlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
