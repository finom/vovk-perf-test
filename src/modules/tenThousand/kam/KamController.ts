import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kams")
export default class KamController {
  @operation({
    summary: "Get Kams",
  })
  @get()
  static getKams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kam",
  })
  @post("{id}")
  static createKam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
