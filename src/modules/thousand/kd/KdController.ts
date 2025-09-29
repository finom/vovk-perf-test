import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kds")
export default class KdController {
  @operation({
    summary: "Get Kds",
  })
  @get()
  static getKds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kd",
  })
  @post("{id}")
  static createKd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
