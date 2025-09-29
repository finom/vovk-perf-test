import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnqs")
export default class GnqController {
  @operation({
    summary: "Get Gnqs",
  })
  @get()
  static getGnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnq",
  })
  @post("{id}")
  static createGnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
