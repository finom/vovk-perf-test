import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpp")
export default class HppController {
  @operation({
    summary: "Get Hpp",
  })
  @get()
  static getHpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpp",
  })
  @post("{id}")
  static createHpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
