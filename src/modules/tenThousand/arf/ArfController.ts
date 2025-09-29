import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arves")
export default class ArfController {
  @operation({
    summary: "Get Arves",
  })
  @get()
  static getArves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arf",
  })
  @post("{id}")
  static createArf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
