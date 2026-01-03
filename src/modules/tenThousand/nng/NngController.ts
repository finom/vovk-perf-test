import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nngs")
export default class NngController {
  @operation({
    summary: "Get Nngs",
  })
  @get()
  static getNngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nng",
  })
  @post("{id}")
  static createNng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
