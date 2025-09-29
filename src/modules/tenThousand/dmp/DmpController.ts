import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmps")
export default class DmpController {
  @operation({
    summary: "Get Dmps",
  })
  @get()
  static getDmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmp",
  })
  @post("{id}")
  static createDmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
