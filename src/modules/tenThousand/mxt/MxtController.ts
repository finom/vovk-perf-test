import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxts")
export default class MxtController {
  @operation({
    summary: "Get Mxts",
  })
  @get()
  static getMxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxt",
  })
  @post("{id}")
  static createMxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
