import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlls")
export default class JllController {
  @operation({
    summary: "Get Jlls",
  })
  @get()
  static getJlls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jll",
  })
  @post("{id}")
  static createJll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
