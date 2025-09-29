import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azns")
export default class AznController {
  @operation({
    summary: "Get Azns",
  })
  @get()
  static getAzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azn",
  })
  @post("{id}")
  static createAzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
