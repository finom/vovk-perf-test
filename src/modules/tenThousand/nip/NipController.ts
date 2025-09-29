import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nips")
export default class NipController {
  @operation({
    summary: "Get Nips",
  })
  @get()
  static getNips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nip",
  })
  @post("{id}")
  static createNip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
