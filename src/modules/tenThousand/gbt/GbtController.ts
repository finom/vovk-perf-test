import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbts")
export default class GbtController {
  @operation({
    summary: "Get Gbts",
  })
  @get()
  static getGbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbt",
  })
  @post("{id}")
  static createGbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
