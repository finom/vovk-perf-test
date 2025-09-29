import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxts")
export default class CxtController {
  @operation({
    summary: "Get Cxts",
  })
  @get()
  static getCxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxt",
  })
  @post("{id}")
  static createCxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
