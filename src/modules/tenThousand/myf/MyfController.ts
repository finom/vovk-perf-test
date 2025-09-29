import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myfs")
export default class MyfController {
  @operation({
    summary: "Get Myfs",
  })
  @get()
  static getMyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myf",
  })
  @post("{id}")
  static createMyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
