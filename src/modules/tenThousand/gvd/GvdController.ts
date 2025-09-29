import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvds")
export default class GvdController {
  @operation({
    summary: "Get Gvds",
  })
  @get()
  static getGvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvd",
  })
  @post("{id}")
  static createGvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
