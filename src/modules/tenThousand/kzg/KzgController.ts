import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzgs")
export default class KzgController {
  @operation({
    summary: "Get Kzgs",
  })
  @get()
  static getKzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzg",
  })
  @post("{id}")
  static createKzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
