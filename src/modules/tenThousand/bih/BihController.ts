import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bihs")
export default class BihController {
  @operation({
    summary: "Get Bihs",
  })
  @get()
  static getBihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bih",
  })
  @post("{id}")
  static createBih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
