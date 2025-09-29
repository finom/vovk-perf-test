import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsds")
export default class GsdController {
  @operation({
    summary: "Get Gsds",
  })
  @get()
  static getGsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsd",
  })
  @post("{id}")
  static createGsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
