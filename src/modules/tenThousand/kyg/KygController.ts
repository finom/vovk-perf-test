import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kygs")
export default class KygController {
  @operation({
    summary: "Get Kygs",
  })
  @get()
  static getKygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyg",
  })
  @post("{id}")
  static createKyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
