import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfs")
export default class KfsController {
  @operation({
    summary: "Get Kfs",
  })
  @get()
  static getKfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfs",
  })
  @post("{id}")
  static createKfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
