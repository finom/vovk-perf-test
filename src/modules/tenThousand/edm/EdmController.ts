import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edm")
export default class EdmController {
  @operation({
    summary: "Get Edm",
  })
  @get()
  static getEdm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edm",
  })
  @post("{id}")
  static createEdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
