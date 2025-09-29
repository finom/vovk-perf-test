import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfs")
export default class GfsController {
  @operation({
    summary: "Get Gfs",
  })
  @get()
  static getGfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfs",
  })
  @post("{id}")
  static createGfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
