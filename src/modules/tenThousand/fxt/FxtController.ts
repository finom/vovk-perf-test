import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxts")
export default class FxtController {
  @operation({
    summary: "Get Fxts",
  })
  @get()
  static getFxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxt",
  })
  @post("{id}")
  static createFxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
