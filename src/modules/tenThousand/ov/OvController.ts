import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ovs")
export default class OvController {
  @operation({
    summary: "Get Ovs",
  })
  @get()
  static getOvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ov",
  })
  @post("{id}")
  static createOv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
