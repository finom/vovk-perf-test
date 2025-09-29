import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdgs")
export default class HdgController {
  @operation({
    summary: "Get Hdgs",
  })
  @get()
  static getHdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdg",
  })
  @post("{id}")
  static createHdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
