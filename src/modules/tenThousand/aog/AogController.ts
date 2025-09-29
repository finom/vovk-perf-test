import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aogs")
export default class AogController {
  @operation({
    summary: "Get Aogs",
  })
  @get()
  static getAogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aog",
  })
  @post("{id}")
  static createAog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
