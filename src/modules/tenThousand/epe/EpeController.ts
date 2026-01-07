import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epe")
export default class EpeController {
  @operation({
    summary: "Get Epe",
  })
  @get()
  static getEpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epe",
  })
  @post("{id}")
  static createEpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
