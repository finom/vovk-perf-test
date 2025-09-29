import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhhs")
export default class JhhController {
  @operation({
    summary: "Get Jhhs",
  })
  @get()
  static getJhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhh",
  })
  @post("{id}")
  static createJhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
