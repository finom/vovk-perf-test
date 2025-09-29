import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("furs")
export default class FurController {
  @operation({
    summary: "Get Furs",
  })
  @get()
  static getFurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fur",
  })
  @post("{id}")
  static createFur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
