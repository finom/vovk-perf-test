import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dshes")
export default class DshController {
  @operation({
    summary: "Get Dshes",
  })
  @get()
  static getDshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsh",
  })
  @post("{id}")
  static createDsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
