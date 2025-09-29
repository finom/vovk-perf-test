import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emns")
export default class EmnController {
  @operation({
    summary: "Get Emns",
  })
  @get()
  static getEmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emn",
  })
  @post("{id}")
  static createEmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
