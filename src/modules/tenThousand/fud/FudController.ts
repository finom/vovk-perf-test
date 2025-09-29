import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuds")
export default class FudController {
  @operation({
    summary: "Get Fuds",
  })
  @get()
  static getFuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fud",
  })
  @post("{id}")
  static createFud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
