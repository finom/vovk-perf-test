import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyzs")
export default class KyzController {
  @operation({
    summary: "Get Kyzs",
  })
  @get()
  static getKyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyz",
  })
  @post("{id}")
  static createKyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
