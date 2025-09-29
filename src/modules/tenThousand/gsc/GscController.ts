import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gscs")
export default class GscController {
  @operation({
    summary: "Get Gscs",
  })
  @get()
  static getGscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsc",
  })
  @post("{id}")
  static createGsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
