import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ays")
export default class AysController {
  @operation({
    summary: "Get Ays",
  })
  @get()
  static getAys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ays",
  })
  @post("{id}")
  static createAys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
