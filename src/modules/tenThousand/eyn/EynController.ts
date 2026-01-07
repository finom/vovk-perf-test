import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyn")
export default class EynController {
  @operation({
    summary: "Get Eyn",
  })
  @get()
  static getEyn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyn",
  })
  @post("{id}")
  static createEyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
