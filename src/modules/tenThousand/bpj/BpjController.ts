import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpjs")
export default class BpjController {
  @operation({
    summary: "Get Bpjs",
  })
  @get()
  static getBpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpj",
  })
  @post("{id}")
  static createBpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
