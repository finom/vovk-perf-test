import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfs")
export default class HfController {
  @operation({
    summary: "Get Hfs",
  })
  @get()
  static getHfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hf",
  })
  @post("{id}")
  static createHf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
