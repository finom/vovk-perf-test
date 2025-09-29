import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vxes")
export default class VxController {
  @operation({
    summary: "Get Vxes",
  })
  @get()
  static getVxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vx",
  })
  @post("{id}")
  static createVx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
