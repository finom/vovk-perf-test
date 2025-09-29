import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gches")
export default class GchController {
  @operation({
    summary: "Get Gches",
  })
  @get()
  static getGches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gch",
  })
  @post("{id}")
  static createGch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
