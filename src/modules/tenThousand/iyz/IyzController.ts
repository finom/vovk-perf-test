import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyzs")
export default class IyzController {
  @operation({
    summary: "Get Iyzs",
  })
  @get()
  static getIyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyz",
  })
  @post("{id}")
  static createIyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
