import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azjs")
export default class AzjController {
  @operation({
    summary: "Get Azjs",
  })
  @get()
  static getAzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azj",
  })
  @post("{id}")
  static createAzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
