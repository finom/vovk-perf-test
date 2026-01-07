import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nid")
export default class NidController {
  @operation({
    summary: "Get Nid",
  })
  @get()
  static getNid = procedure({
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
