import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnxes")
export default class CnxController {
  @operation({
    summary: "Get Cnxes",
  })
  @get()
  static getCnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnx",
  })
  @post("{id}")
  static createCnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
