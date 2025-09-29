import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzfs")
export default class KzfController {
  @operation({
    summary: "Get Kzfs",
  })
  @get()
  static getKzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzf",
  })
  @post("{id}")
  static createKzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
