import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fars")
export default class FarController {
  @operation({
    summary: "Get Fars",
  })
  @get()
  static getFars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Far",
  })
  @post("{id}")
  static createFar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
