import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gces")
export default class GceController {
  @operation({
    summary: "Get Gces",
  })
  @get()
  static getGces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gce",
  })
  @post("{id}")
  static createGce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
