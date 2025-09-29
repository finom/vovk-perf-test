import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dijs")
export default class DijController {
  @operation({
    summary: "Get Dijs",
  })
  @get()
  static getDijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dij",
  })
  @post("{id}")
  static createDij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
