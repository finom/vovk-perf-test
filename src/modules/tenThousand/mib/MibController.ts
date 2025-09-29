import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mibs")
export default class MibController {
  @operation({
    summary: "Get Mibs",
  })
  @get()
  static getMibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mib",
  })
  @post("{id}")
  static createMib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
