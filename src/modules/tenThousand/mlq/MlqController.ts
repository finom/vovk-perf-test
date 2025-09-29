import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlqs")
export default class MlqController {
  @operation({
    summary: "Get Mlqs",
  })
  @get()
  static getMlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlq",
  })
  @post("{id}")
  static createMlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
