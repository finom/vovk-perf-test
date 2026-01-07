import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aj")
export default class AjController {
  @operation({
    summary: "Get Aj",
  })
  @get()
  static getAj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aj",
  })
  @post("{id}")
  static createAj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
