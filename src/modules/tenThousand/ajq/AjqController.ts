import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajq")
export default class AjqController {
  @operation({
    summary: "Get Ajq",
  })
  @get()
  static getAjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajq",
  })
  @post("{id}")
  static createAjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
