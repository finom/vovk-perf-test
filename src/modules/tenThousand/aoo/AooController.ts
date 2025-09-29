import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoos")
export default class AooController {
  @operation({
    summary: "Get Aoos",
  })
  @get()
  static getAoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoo",
  })
  @post("{id}")
  static createAoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
