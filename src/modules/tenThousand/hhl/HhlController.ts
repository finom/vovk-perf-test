import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhls")
export default class HhlController {
  @operation({
    summary: "Get Hhls",
  })
  @get()
  static getHhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhl",
  })
  @post("{id}")
  static createHhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
