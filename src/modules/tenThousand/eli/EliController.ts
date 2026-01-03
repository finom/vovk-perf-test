import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elis")
export default class EliController {
  @operation({
    summary: "Get Elis",
  })
  @get()
  static getElis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eli",
  })
  @post("{id}")
  static createEli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
