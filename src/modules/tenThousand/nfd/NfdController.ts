import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfds")
export default class NfdController {
  @operation({
    summary: "Get Nfds",
  })
  @get()
  static getNfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfd",
  })
  @post("{id}")
  static createNfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
