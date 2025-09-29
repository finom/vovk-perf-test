import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fds")
export default class FdsController {
  @operation({
    summary: "Get Fds",
  })
  @get()
  static getFds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fds",
  })
  @post("{id}")
  static createFds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
