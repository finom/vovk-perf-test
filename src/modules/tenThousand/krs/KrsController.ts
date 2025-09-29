import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krs")
export default class KrsController {
  @operation({
    summary: "Get Krs",
  })
  @get()
  static getKrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krs",
  })
  @post("{id}")
  static createKrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
