import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyis")
export default class EyiController {
  @operation({
    summary: "Get Eyis",
  })
  @get()
  static getEyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyi",
  })
  @post("{id}")
  static createEyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
