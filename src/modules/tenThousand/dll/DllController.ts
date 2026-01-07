import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dll")
export default class DllController {
  @operation({
    summary: "Get Dll",
  })
  @get()
  static getDll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dll",
  })
  @post("{id}")
  static createDll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
