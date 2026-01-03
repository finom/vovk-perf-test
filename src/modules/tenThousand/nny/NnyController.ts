import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnies")
export default class NnyController {
  @operation({
    summary: "Get Nnies",
  })
  @get()
  static getNnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nny",
  })
  @post("{id}")
  static createNny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
