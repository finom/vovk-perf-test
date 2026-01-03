import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbas")
export default class BbaController {
  @operation({
    summary: "Get Bbas",
  })
  @get()
  static getBbas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bba",
  })
  @post("{id}")
  static createBba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
