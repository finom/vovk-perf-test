import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dohs")
export default class DohController {
  @operation({
    summary: "Get Dohs",
  })
  @get()
  static getDohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doh",
  })
  @post("{id}")
  static createDoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
