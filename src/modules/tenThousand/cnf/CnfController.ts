import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnfs")
export default class CnfController {
  @operation({
    summary: "Get Cnfs",
  })
  @get()
  static getCnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnf",
  })
  @post("{id}")
  static createCnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
