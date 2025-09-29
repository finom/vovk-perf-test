import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kufs")
export default class KufController {
  @operation({
    summary: "Get Kufs",
  })
  @get()
  static getKufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuf",
  })
  @post("{id}")
  static createKuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
