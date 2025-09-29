import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdms")
export default class KdmController {
  @operation({
    summary: "Get Kdms",
  })
  @get()
  static getKdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdm",
  })
  @post("{id}")
  static createKdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
