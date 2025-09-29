import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clds")
export default class CldController {
  @operation({
    summary: "Get Clds",
  })
  @get()
  static getClds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cld",
  })
  @post("{id}")
  static createCld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
