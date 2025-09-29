import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilhs")
export default class IlhController {
  @operation({
    summary: "Get Ilhs",
  })
  @get()
  static getIlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilh",
  })
  @post("{id}")
  static createIlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
