import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htfs")
export default class HtfController {
  @operation({
    summary: "Get Htfs",
  })
  @get()
  static getHtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htf",
  })
  @post("{id}")
  static createHtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
