import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyzs")
export default class CyzController {
  @operation({
    summary: "Get Cyzs",
  })
  @get()
  static getCyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyz",
  })
  @post("{id}")
  static createCyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
