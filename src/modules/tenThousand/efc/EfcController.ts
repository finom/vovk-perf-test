import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efcs")
export default class EfcController {
  @operation({
    summary: "Get Efcs",
  })
  @get()
  static getEfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efc",
  })
  @post("{id}")
  static createEfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
