import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqfs")
export default class AqfController {
  @operation({
    summary: "Get Aqfs",
  })
  @get()
  static getAqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqf",
  })
  @post("{id}")
  static createAqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
