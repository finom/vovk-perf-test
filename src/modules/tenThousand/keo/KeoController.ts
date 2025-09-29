import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keos")
export default class KeoController {
  @operation({
    summary: "Get Keos",
  })
  @get()
  static getKeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Keo",
  })
  @post("{id}")
  static createKeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
