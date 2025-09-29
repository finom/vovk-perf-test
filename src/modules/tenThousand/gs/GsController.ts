import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gs")
export default class GsController {
  @operation({
    summary: "Get Gs",
  })
  @get()
  static getGs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gs",
  })
  @post("{id}")
  static createGs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
