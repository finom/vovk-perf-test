import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpfs")
export default class JpfController {
  @operation({
    summary: "Get Jpfs",
  })
  @get()
  static getJpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpf",
  })
  @post("{id}")
  static createJpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
