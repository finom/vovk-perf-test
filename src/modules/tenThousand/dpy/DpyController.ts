import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpies")
export default class DpyController {
  @operation({
    summary: "Get Dpies",
  })
  @get()
  static getDpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpy",
  })
  @post("{id}")
  static createDpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
