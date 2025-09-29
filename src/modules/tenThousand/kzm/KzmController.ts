import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzms")
export default class KzmController {
  @operation({
    summary: "Get Kzms",
  })
  @get()
  static getKzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzm",
  })
  @post("{id}")
  static createKzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
