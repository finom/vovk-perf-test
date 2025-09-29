import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efhs")
export default class EfhController {
  @operation({
    summary: "Get Efhs",
  })
  @get()
  static getEfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efh",
  })
  @post("{id}")
  static createEfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
