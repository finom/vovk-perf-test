import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqies")
export default class AqyController {
  @operation({
    summary: "Get Aqies",
  })
  @get()
  static getAqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqy",
  })
  @post("{id}")
  static createAqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
