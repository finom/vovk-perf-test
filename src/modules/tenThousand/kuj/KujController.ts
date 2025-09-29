import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kujs")
export default class KujController {
  @operation({
    summary: "Get Kujs",
  })
  @get()
  static getKujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuj",
  })
  @post("{id}")
  static createKuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
