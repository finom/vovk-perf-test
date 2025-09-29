import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhfs")
export default class JhfController {
  @operation({
    summary: "Get Jhfs",
  })
  @get()
  static getJhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhf",
  })
  @post("{id}")
  static createJhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
