import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duds")
export default class DudController {
  @operation({
    summary: "Get Duds",
  })
  @get()
  static getDuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dud",
  })
  @post("{id}")
  static createDud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
