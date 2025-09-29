import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avs")
export default class AvController {
  @operation({
    summary: "Get Avs",
  })
  @get()
  static getAvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Av",
  })
  @post("{id}")
  static createAv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
