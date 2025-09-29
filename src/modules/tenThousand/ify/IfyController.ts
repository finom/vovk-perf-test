import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifies")
export default class IfyController {
  @operation({
    summary: "Get Ifies",
  })
  @get()
  static getIfies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ify",
  })
  @post("{id}")
  static createIfy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
