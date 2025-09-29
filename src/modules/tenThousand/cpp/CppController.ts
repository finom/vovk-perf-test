import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpps")
export default class CppController {
  @operation({
    summary: "Get Cpps",
  })
  @get()
  static getCpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpp",
  })
  @post("{id}")
  static createCpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
