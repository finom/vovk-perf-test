import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaxes")
export default class GaxController {
  @operation({
    summary: "Get Gaxes",
  })
  @get()
  static getGaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gax",
  })
  @post("{id}")
  static createGax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
