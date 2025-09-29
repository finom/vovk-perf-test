import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blws")
export default class BlwController {
  @operation({
    summary: "Get Blws",
  })
  @get()
  static getBlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blw",
  })
  @post("{id}")
  static createBlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
