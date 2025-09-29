import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxcs")
export default class GxcController {
  @operation({
    summary: "Get Gxcs",
  })
  @get()
  static getGxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxc",
  })
  @post("{id}")
  static createGxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
