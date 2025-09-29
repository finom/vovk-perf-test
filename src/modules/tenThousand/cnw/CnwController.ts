import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnws")
export default class CnwController {
  @operation({
    summary: "Get Cnws",
  })
  @get()
  static getCnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnw",
  })
  @post("{id}")
  static createCnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
