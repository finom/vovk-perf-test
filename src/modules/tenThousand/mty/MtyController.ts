import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mties")
export default class MtyController {
  @operation({
    summary: "Get Mties",
  })
  @get()
  static getMties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mty",
  })
  @post("{id}")
  static createMty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
