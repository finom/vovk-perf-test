import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jl")
export default class JlController {
  @operation({
    summary: "Get Jl",
  })
  @get()
  static getJl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jl",
  })
  @post("{id}")
  static createJl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
