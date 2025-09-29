import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnns")
export default class DnnController {
  @operation({
    summary: "Get Dnns",
  })
  @get()
  static getDnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnn",
  })
  @post("{id}")
  static createDnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
