import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjhs")
export default class KjhController {
  @operation({
    summary: "Get Kjhs",
  })
  @get()
  static getKjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjh",
  })
  @post("{id}")
  static createKjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
