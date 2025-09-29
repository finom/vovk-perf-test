import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyfs")
export default class EyfController {
  @operation({
    summary: "Get Eyfs",
  })
  @get()
  static getEyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyf",
  })
  @post("{id}")
  static createEyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
