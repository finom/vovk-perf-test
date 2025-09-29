import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnds")
export default class DndController {
  @operation({
    summary: "Get Dnds",
  })
  @get()
  static getDnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnd",
  })
  @post("{id}")
  static createDnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
