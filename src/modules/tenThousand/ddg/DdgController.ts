import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddgs")
export default class DdgController {
  @operation({
    summary: "Get Ddgs",
  })
  @get()
  static getDdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddg",
  })
  @post("{id}")
  static createDdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
