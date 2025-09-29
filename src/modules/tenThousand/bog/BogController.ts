import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bogs")
export default class BogController {
  @operation({
    summary: "Get Bogs",
  })
  @get()
  static getBogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bog",
  })
  @post("{id}")
  static createBog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
