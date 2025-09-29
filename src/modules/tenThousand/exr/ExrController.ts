import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exrs")
export default class ExrController {
  @operation({
    summary: "Get Exrs",
  })
  @get()
  static getExrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exr",
  })
  @post("{id}")
  static createExr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
