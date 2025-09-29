import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lves")
export default class LfController {
  @operation({
    summary: "Get Lves",
  })
  @get()
  static getLves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lf",
  })
  @post("{id}")
  static createLf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
