import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fubs")
export default class FubController {
  @operation({
    summary: "Get Fubs",
  })
  @get()
  static getFubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fub",
  })
  @post("{id}")
  static createFub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
