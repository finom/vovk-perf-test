import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxfs")
export default class KxfController {
  @operation({
    summary: "Get Kxfs",
  })
  @get()
  static getKxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxf",
  })
  @post("{id}")
  static createKxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
