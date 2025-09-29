import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfds")
export default class GfdController {
  @operation({
    summary: "Get Gfds",
  })
  @get()
  static getGfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfd",
  })
  @post("{id}")
  static createGfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
