import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adies")
export default class AdyController {
  @operation({
    summary: "Get Adies",
  })
  @get()
  static getAdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ady",
  })
  @post("{id}")
  static createAdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
