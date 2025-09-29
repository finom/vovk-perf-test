import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dars")
export default class DarController {
  @operation({
    summary: "Get Dars",
  })
  @get()
  static getDars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dar",
  })
  @post("{id}")
  static createDar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
