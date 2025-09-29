import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqds")
export default class GqdController {
  @operation({
    summary: "Get Gqds",
  })
  @get()
  static getGqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqd",
  })
  @post("{id}")
  static createGqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
