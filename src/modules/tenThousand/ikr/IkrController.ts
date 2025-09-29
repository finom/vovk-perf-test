import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikrs")
export default class IkrController {
  @operation({
    summary: "Get Ikrs",
  })
  @get()
  static getIkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikr",
  })
  @post("{id}")
  static createIkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
