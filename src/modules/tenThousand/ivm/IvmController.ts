import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivm")
export default class IvmController {
  @operation({
    summary: "Get Ivm",
  })
  @get()
  static getIvm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivm",
  })
  @post("{id}")
  static createIvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
