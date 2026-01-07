import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npa")
export default class NpaController {
  @operation({
    summary: "Get Npa",
  })
  @get()
  static getNpa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npa",
  })
  @post("{id}")
  static createNpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
