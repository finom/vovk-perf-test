import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpgs")
export default class GpgController {
  @operation({
    summary: "Get Gpgs",
  })
  @get()
  static getGpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpg",
  })
  @post("{id}")
  static createGpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
