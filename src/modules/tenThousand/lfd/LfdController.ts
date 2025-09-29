import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfds")
export default class LfdController {
  @operation({
    summary: "Get Lfds",
  })
  @get()
  static getLfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfd",
  })
  @post("{id}")
  static createLfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
