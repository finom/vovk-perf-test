import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ims")
export default class ImsController {
  @operation({
    summary: "Get Ims",
  })
  @get()
  static getIms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ims",
  })
  @post("{id}")
  static createIms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
