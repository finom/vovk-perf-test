import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gecs")
export default class GecController {
  @operation({
    summary: "Get Gecs",
  })
  @get()
  static getGecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gec",
  })
  @post("{id}")
  static createGec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
