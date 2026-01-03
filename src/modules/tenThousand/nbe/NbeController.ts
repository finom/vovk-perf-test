import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbes")
export default class NbeController {
  @operation({
    summary: "Get Nbes",
  })
  @get()
  static getNbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbe",
  })
  @post("{id}")
  static createNbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
