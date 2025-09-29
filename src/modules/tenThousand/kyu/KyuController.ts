import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyus")
export default class KyuController {
  @operation({
    summary: "Get Kyus",
  })
  @get()
  static getKyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyu",
  })
  @post("{id}")
  static createKyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
