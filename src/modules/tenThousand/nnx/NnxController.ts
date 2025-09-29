import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnxes")
export default class NnxController {
  @operation({
    summary: "Get Nnxes",
  })
  @get()
  static getNnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnx",
  })
  @post("{id}")
  static createNnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
