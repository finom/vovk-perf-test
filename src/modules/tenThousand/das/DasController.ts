import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("das")
export default class DasController {
  @operation({
    summary: "Get Das",
  })
  @get()
  static getDas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Das",
  })
  @post("{id}")
  static createDas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
