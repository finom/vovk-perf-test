import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdls")
export default class JdlController {
  @operation({
    summary: "Get Jdls",
  })
  @get()
  static getJdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdl",
  })
  @post("{id}")
  static createJdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
