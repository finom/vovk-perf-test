import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nids")
export default class NidController {
  @operation({
    summary: "Get Nids",
  })
  @get()
  static getNids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nid",
  })
  @post("{id}")
  static createNid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
