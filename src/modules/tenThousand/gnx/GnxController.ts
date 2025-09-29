import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnxes")
export default class GnxController {
  @operation({
    summary: "Get Gnxes",
  })
  @get()
  static getGnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnx",
  })
  @post("{id}")
  static createGnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
