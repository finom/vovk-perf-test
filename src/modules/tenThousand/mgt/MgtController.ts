import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgts")
export default class MgtController {
  @operation({
    summary: "Get Mgts",
  })
  @get()
  static getMgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgt",
  })
  @post("{id}")
  static createMgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
