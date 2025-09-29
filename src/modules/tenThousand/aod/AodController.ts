import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aods")
export default class AodController {
  @operation({
    summary: "Get Aods",
  })
  @get()
  static getAods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aod",
  })
  @post("{id}")
  static createAod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
