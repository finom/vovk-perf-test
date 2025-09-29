import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayzs")
export default class AyzController {
  @operation({
    summary: "Get Ayzs",
  })
  @get()
  static getAyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayz",
  })
  @post("{id}")
  static createAyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
