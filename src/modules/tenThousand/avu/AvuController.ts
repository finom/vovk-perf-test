import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avus")
export default class AvuController {
  @operation({
    summary: "Get Avus",
  })
  @get()
  static getAvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avu",
  })
  @post("{id}")
  static createAvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
