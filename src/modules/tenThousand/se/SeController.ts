import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ses")
export default class SeController {
  @operation({
    summary: "Get Ses",
  })
  @get()
  static getSes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Se",
  })
  @post("{id}")
  static createSe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
