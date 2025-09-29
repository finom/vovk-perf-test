import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddies")
export default class DdyController {
  @operation({
    summary: "Get Ddies",
  })
  @get()
  static getDdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddy",
  })
  @post("{id}")
  static createDdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
