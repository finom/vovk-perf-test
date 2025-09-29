import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gufs")
export default class GufController {
  @operation({
    summary: "Get Gufs",
  })
  @get()
  static getGufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guf",
  })
  @post("{id}")
  static createGuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
