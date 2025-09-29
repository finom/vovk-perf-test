import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqfs")
export default class KqfController {
  @operation({
    summary: "Get Kqfs",
  })
  @get()
  static getKqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqf",
  })
  @post("{id}")
  static createKqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
