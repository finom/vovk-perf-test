import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdzs")
export default class KdzController {
  @operation({
    summary: "Get Kdzs",
  })
  @get()
  static getKdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdz",
  })
  @post("{id}")
  static createKdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
