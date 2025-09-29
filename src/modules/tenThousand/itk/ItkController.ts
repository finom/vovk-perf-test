import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itks")
export default class ItkController {
  @operation({
    summary: "Get Itks",
  })
  @get()
  static getItks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itk",
  })
  @post("{id}")
  static createItk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
