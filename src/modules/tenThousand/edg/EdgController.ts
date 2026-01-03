import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edgs")
export default class EdgController {
  @operation({
    summary: "Get Edgs",
  })
  @get()
  static getEdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edg",
  })
  @post("{id}")
  static createEdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
