import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gets")
export default class GetController {
  @operation({
    summary: "Get Gets",
  })
  @get()
  static getGets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Get",
  })
  @post("{id}")
  static createGet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
