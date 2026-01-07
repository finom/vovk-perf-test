import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndb")
export default class NdbController {
  @operation({
    summary: "Get Ndb",
  })
  @get()
  static getNdb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndb",
  })
  @post("{id}")
  static createNdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
