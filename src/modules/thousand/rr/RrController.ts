import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rrs")
export default class RrController {
  @operation({
    summary: "Get Rrs",
  })
  @get()
  static getRrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rr",
  })
  @post("{id}")
  static createRr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
