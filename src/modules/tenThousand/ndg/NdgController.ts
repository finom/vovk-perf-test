import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndg")
export default class NdgController {
  @operation({
    summary: "Get Ndg",
  })
  @get()
  static getNdg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndg",
  })
  @post("{id}")
  static createNdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
