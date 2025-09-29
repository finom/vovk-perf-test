import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfds")
export default class HfdController {
  @operation({
    summary: "Get Hfds",
  })
  @get()
  static getHfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfd",
  })
  @post("{id}")
  static createHfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
