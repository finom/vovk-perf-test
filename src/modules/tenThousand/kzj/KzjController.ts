import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzjs")
export default class KzjController {
  @operation({
    summary: "Get Kzjs",
  })
  @get()
  static getKzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzj",
  })
  @post("{id}")
  static createKzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
