import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axfs")
export default class AxfController {
  @operation({
    summary: "Get Axfs",
  })
  @get()
  static getAxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axf",
  })
  @post("{id}")
  static createAxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
