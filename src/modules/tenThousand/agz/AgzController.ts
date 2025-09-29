import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agzs")
export default class AgzController {
  @operation({
    summary: "Get Agzs",
  })
  @get()
  static getAgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agz",
  })
  @post("{id}")
  static createAgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
