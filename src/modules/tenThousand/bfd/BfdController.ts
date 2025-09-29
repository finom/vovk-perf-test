import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfds")
export default class BfdController {
  @operation({
    summary: "Get Bfds",
  })
  @get()
  static getBfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfd",
  })
  @post("{id}")
  static createBfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
