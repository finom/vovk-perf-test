import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgies")
export default class MgyController {
  @operation({
    summary: "Get Mgies",
  })
  @get()
  static getMgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgy",
  })
  @post("{id}")
  static createMgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
