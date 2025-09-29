import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bias")
export default class BiaController {
  @operation({
    summary: "Get Bias",
  })
  @get()
  static getBias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bia",
  })
  @post("{id}")
  static createBia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
