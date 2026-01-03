import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndbs")
export default class NdbController {
  @operation({
    summary: "Get Ndbs",
  })
  @get()
  static getNdbs = procedure({
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
