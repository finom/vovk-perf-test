import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dils")
export default class DilController {
  @operation({
    summary: "Get Dils",
  })
  @get()
  static getDils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dil",
  })
  @post("{id}")
  static createDil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
