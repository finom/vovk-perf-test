import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyzs")
export default class DyzController {
  @operation({
    summary: "Get Dyzs",
  })
  @get()
  static getDyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyz",
  })
  @post("{id}")
  static createDyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
