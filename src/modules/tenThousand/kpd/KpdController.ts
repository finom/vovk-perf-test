import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpds")
export default class KpdController {
  @operation({
    summary: "Get Kpds",
  })
  @get()
  static getKpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpd",
  })
  @post("{id}")
  static createKpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
