import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlls")
export default class DllController {
  @operation({
    summary: "Get Dlls",
  })
  @get()
  static getDlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dll",
  })
  @post("{id}")
  static createDll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
