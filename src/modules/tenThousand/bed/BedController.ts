import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beds")
export default class BedController {
  @operation({
    summary: "Get Beds",
  })
  @get()
  static getBeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bed",
  })
  @post("{id}")
  static createBed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
