import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsds")
export default class FsdController {
  @operation({
    summary: "Get Fsds",
  })
  @get()
  static getFsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsd",
  })
  @post("{id}")
  static createFsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
