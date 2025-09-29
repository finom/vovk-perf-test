import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apfs")
export default class ApfController {
  @operation({
    summary: "Get Apfs",
  })
  @get()
  static getApfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apf",
  })
  @post("{id}")
  static createApf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
