import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dees")
export default class DeeController {
  @operation({
    summary: "Get Dees",
  })
  @get()
  static getDees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dee",
  })
  @post("{id}")
  static createDee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
