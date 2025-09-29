import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etts")
export default class EttController {
  @operation({
    summary: "Get Etts",
  })
  @get()
  static getEtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ett",
  })
  @post("{id}")
  static createEtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
