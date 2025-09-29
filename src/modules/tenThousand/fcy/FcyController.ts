import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcies")
export default class FcyController {
  @operation({
    summary: "Get Fcies",
  })
  @get()
  static getFcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcy",
  })
  @post("{id}")
  static createFcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
