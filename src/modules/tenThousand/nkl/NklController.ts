import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkl")
export default class NklController {
  @operation({
    summary: "Get Nkl",
  })
  @get()
  static getNkl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkl",
  })
  @post("{id}")
  static createNkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
