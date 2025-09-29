import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxts")
export default class LxtController {
  @operation({
    summary: "Get Lxts",
  })
  @get()
  static getLxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxt",
  })
  @post("{id}")
  static createLxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
