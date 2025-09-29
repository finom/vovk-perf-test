import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neds")
export default class NedController {
  @operation({
    summary: "Get Neds",
  })
  @get()
  static getNeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ned",
  })
  @post("{id}")
  static createNed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
