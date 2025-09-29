import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdcs")
export default class KdcController {
  @operation({
    summary: "Get Kdcs",
  })
  @get()
  static getKdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdc",
  })
  @post("{id}")
  static createKdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
