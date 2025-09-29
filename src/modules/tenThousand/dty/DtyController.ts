import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dties")
export default class DtyController {
  @operation({
    summary: "Get Dties",
  })
  @get()
  static getDties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dty",
  })
  @post("{id}")
  static createDty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
