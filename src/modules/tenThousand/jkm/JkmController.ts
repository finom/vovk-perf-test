import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkms")
export default class JkmController {
  @operation({
    summary: "Get Jkms",
  })
  @get()
  static getJkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkm",
  })
  @post("{id}")
  static createJkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
