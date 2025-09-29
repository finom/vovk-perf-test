import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dors")
export default class DorController {
  @operation({
    summary: "Get Dors",
  })
  @get()
  static getDors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dor",
  })
  @post("{id}")
  static createDor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
