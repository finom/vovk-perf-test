import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfds")
export default class MfdController {
  @operation({
    summary: "Get Mfds",
  })
  @get()
  static getMfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfd",
  })
  @post("{id}")
  static createMfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
