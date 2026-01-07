import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzl")
export default class MzlController {
  @operation({
    summary: "Get Mzl",
  })
  @get()
  static getMzl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzl",
  })
  @post("{id}")
  static createMzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
