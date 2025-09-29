import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkies")
export default class KkyController {
  @operation({
    summary: "Get Kkies",
  })
  @get()
  static getKkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kky",
  })
  @post("{id}")
  static createKky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
