import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dums")
export default class DumController {
  @operation({
    summary: "Get Dums",
  })
  @get()
  static getDums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dum",
  })
  @post("{id}")
  static createDum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
