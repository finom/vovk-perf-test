import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuls")
export default class KulController {
  @operation({
    summary: "Get Kuls",
  })
  @get()
  static getKuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kul",
  })
  @post("{id}")
  static createKul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
