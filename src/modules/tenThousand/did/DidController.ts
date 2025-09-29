import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dids")
export default class DidController {
  @operation({
    summary: "Get Dids",
  })
  @get()
  static getDids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Did",
  })
  @post("{id}")
  static createDid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
