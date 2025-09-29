import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amfs")
export default class AmfController {
  @operation({
    summary: "Get Amfs",
  })
  @get()
  static getAmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amf",
  })
  @post("{id}")
  static createAmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
