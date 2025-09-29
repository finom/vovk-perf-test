import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcies")
export default class GcyController {
  @operation({
    summary: "Get Gcies",
  })
  @get()
  static getGcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcy",
  })
  @post("{id}")
  static createGcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
