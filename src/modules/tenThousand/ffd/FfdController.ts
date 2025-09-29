import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffds")
export default class FfdController {
  @operation({
    summary: "Get Ffds",
  })
  @get()
  static getFfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffd",
  })
  @post("{id}")
  static createFfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
