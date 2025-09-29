import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhts")
export default class DhtController {
  @operation({
    summary: "Get Dhts",
  })
  @get()
  static getDhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dht",
  })
  @post("{id}")
  static createDht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
