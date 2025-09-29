import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efzs")
export default class EfzController {
  @operation({
    summary: "Get Efzs",
  })
  @get()
  static getEfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efz",
  })
  @post("{id}")
  static createEfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
