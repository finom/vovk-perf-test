import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpds")
export default class BpdController {
  @operation({
    summary: "Get Bpds",
  })
  @get()
  static getBpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpd",
  })
  @post("{id}")
  static createBpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
