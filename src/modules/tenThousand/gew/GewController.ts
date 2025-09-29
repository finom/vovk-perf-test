import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gews")
export default class GewController {
  @operation({
    summary: "Get Gews",
  })
  @get()
  static getGews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gew",
  })
  @post("{id}")
  static createGew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
