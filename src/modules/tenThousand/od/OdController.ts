import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ods")
export default class OdController {
  @operation({
    summary: "Get Ods",
  })
  @get()
  static getOds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Od",
  })
  @post("{id}")
  static createOd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
