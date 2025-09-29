import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kias")
export default class KiaController {
  @operation({
    summary: "Get Kias",
  })
  @get()
  static getKias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kia",
  })
  @post("{id}")
  static createKia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
