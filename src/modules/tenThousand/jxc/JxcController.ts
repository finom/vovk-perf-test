import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxcs")
export default class JxcController {
  @operation({
    summary: "Get Jxcs",
  })
  @get()
  static getJxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxc",
  })
  @post("{id}")
  static createJxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
