import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bags")
export default class BagController {
  @operation({
    summary: "Get Bags",
  })
  @get()
  static getBags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bag",
  })
  @post("{id}")
  static createBag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
