import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpws")
export default class GpwController {
  @operation({
    summary: "Get Gpws",
  })
  @get()
  static getGpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpw",
  })
  @post("{id}")
  static createGpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
