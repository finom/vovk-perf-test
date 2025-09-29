import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lihs")
export default class LihController {
  @operation({
    summary: "Get Lihs",
  })
  @get()
  static getLihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lih",
  })
  @post("{id}")
  static createLih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
