import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hews")
export default class HewController {
  @operation({
    summary: "Get Hews",
  })
  @get()
  static getHews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hew",
  })
  @post("{id}")
  static createHew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
