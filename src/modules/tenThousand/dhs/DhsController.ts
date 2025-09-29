import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhs")
export default class DhsController {
  @operation({
    summary: "Get Dhs",
  })
  @get()
  static getDhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhs",
  })
  @post("{id}")
  static createDhs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
