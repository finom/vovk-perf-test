import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ena")
export default class EnaController {
  @operation({
    summary: "Get Ena",
  })
  @get()
  static getEna = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ena",
  })
  @post("{id}")
  static createEna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
