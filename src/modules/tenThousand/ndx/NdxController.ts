import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndxes")
export default class NdxController {
  @operation({
    summary: "Get Ndxes",
  })
  @get()
  static getNdxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndx",
  })
  @post("{id}")
  static createNdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
