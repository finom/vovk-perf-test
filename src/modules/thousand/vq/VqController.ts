import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vqs")
export default class VqController {
  @operation({
    summary: "Get Vqs",
  })
  @get()
  static getVqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vq",
  })
  @post("{id}")
  static createVq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
