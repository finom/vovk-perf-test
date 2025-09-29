import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvjs")
export default class DvjController {
  @operation({
    summary: "Get Dvjs",
  })
  @get()
  static getDvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvj",
  })
  @post("{id}")
  static createDvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
