import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzts")
export default class MztController {
  @operation({
    summary: "Get Mzts",
  })
  @get()
  static getMzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzt",
  })
  @post("{id}")
  static createMzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
