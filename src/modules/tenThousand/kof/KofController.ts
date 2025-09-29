import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kofs")
export default class KofController {
  @operation({
    summary: "Get Kofs",
  })
  @get()
  static getKofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kof",
  })
  @post("{id}")
  static createKof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
