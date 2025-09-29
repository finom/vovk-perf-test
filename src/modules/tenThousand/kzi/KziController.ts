import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzis")
export default class KziController {
  @operation({
    summary: "Get Kzis",
  })
  @get()
  static getKzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzi",
  })
  @post("{id}")
  static createKzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
