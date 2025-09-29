import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyks")
export default class EykController {
  @operation({
    summary: "Get Eyks",
  })
  @get()
  static getEyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyk",
  })
  @post("{id}")
  static createEyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
