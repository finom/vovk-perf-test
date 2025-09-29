import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grrs")
export default class GrrController {
  @operation({
    summary: "Get Grrs",
  })
  @get()
  static getGrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grr",
  })
  @post("{id}")
  static createGrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
