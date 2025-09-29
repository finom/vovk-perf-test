import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fofs")
export default class FofController {
  @operation({
    summary: "Get Fofs",
  })
  @get()
  static getFofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fof",
  })
  @post("{id}")
  static createFof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
