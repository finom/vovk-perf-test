import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lous")
export default class LouController {
  @operation({
    summary: "Get Lous",
  })
  @get()
  static getLous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lou",
  })
  @post("{id}")
  static createLou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
