import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpps")
export default class HppController {
  @operation({
    summary: "Get Hpps",
  })
  @get()
  static getHpps = procedure({
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
