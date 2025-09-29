import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnts")
export default class JntController {
  @operation({
    summary: "Get Jnts",
  })
  @get()
  static getJnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnt",
  })
  @post("{id}")
  static createJnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
