import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efo")
export default class EfoController {
  @operation({
    summary: "Get Efo",
  })
  @get()
  static getEfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efo",
  })
  @post("{id}")
  static createEfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
