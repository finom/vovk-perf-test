import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnns")
export default class CnnController {
  @operation({
    summary: "Get Cnns",
  })
  @get()
  static getCnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnn",
  })
  @post("{id}")
  static createCnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
