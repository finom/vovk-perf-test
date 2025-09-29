import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("futs")
export default class FutController {
  @operation({
    summary: "Get Futs",
  })
  @get()
  static getFuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fut",
  })
  @post("{id}")
  static createFut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
