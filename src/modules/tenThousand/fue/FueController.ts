import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fues")
export default class FueController {
  @operation({
    summary: "Get Fues",
  })
  @get()
  static getFues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fue",
  })
  @post("{id}")
  static createFue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
