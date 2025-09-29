import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kurs")
export default class KurController {
  @operation({
    summary: "Get Kurs",
  })
  @get()
  static getKurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kur",
  })
  @post("{id}")
  static createKur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
