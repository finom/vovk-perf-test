import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxies")
export default class KxyController {
  @operation({
    summary: "Get Kxies",
  })
  @get()
  static getKxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxy",
  })
  @post("{id}")
  static createKxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
