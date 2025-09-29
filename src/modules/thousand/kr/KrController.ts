import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krs")
export default class KrController {
  @operation({
    summary: "Get Krs",
  })
  @get()
  static getKrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kr",
  })
  @post("{id}")
  static createKr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
