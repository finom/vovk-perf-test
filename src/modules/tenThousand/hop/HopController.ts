import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hops")
export default class HopController {
  @operation({
    summary: "Get Hops",
  })
  @get()
  static getHops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hop",
  })
  @post("{id}")
  static createHop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
