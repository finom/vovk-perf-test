import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guds")
export default class GudController {
  @operation({
    summary: "Get Guds",
  })
  @get()
  static getGuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gud",
  })
  @post("{id}")
  static createGud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
