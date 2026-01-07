import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpp")
export default class CppController {
  @operation({
    summary: "Get Cpp",
  })
  @get()
  static getCpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpp",
  })
  @post("{id}")
  static createCpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
