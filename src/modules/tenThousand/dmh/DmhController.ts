import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmhs")
export default class DmhController {
  @operation({
    summary: "Get Dmhs",
  })
  @get()
  static getDmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmh",
  })
  @post("{id}")
  static createDmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
