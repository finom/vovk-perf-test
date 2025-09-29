import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imrs")
export default class ImrController {
  @operation({
    summary: "Get Imrs",
  })
  @get()
  static getImrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imr",
  })
  @post("{id}")
  static createImr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
