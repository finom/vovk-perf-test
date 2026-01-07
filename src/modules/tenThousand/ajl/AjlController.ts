import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajl")
export default class AjlController {
  @operation({
    summary: "Get Ajl",
  })
  @get()
  static getAjl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajl",
  })
  @post("{id}")
  static createAjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
