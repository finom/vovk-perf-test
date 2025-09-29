import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikfs")
export default class IkfController {
  @operation({
    summary: "Get Ikfs",
  })
  @get()
  static getIkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikf",
  })
  @post("{id}")
  static createIkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
