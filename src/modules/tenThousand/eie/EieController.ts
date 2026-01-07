import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eie")
export default class EieController {
  @operation({
    summary: "Get Eie",
  })
  @get()
  static getEie = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eie",
  })
  @post("{id}")
  static createEie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
