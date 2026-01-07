import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nng")
export default class NngController {
  @operation({
    summary: "Get Nng",
  })
  @get()
  static getNng = procedure({
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
