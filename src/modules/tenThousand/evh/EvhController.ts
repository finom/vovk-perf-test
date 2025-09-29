import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evhs")
export default class EvhController {
  @operation({
    summary: "Get Evhs",
  })
  @get()
  static getEvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evh",
  })
  @post("{id}")
  static createEvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
