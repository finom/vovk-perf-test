import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihhs")
export default class IhhController {
  @operation({
    summary: "Get Ihhs",
  })
  @get()
  static getIhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihh",
  })
  @post("{id}")
  static createIhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
