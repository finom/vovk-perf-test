import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cels")
export default class CelController {
  @operation({
    summary: "Get Cels",
  })
  @get()
  static getCels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cel",
  })
  @post("{id}")
  static createCel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
