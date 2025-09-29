import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fs")
export default class FsController {
  @operation({
    summary: "Get Fs",
  })
  @get()
  static getFs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fs",
  })
  @post("{id}")
  static createFs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
