import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khhs")
export default class KhhController {
  @operation({
    summary: "Get Khhs",
  })
  @get()
  static getKhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khh",
  })
  @post("{id}")
  static createKhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
