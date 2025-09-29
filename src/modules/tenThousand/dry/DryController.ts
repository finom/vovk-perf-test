import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dries")
export default class DryController {
  @operation({
    summary: "Get Dries",
  })
  @get()
  static getDries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dry",
  })
  @post("{id}")
  static createDry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
