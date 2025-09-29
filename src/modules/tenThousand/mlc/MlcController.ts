import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlcs")
export default class MlcController {
  @operation({
    summary: "Get Mlcs",
  })
  @get()
  static getMlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlc",
  })
  @post("{id}")
  static createMlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
