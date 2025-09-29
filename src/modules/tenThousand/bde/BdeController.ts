import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdes")
export default class BdeController {
  @operation({
    summary: "Get Bdes",
  })
  @get()
  static getBdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bde",
  })
  @post("{id}")
  static createBde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
