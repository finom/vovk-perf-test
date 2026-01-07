import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyz")
export default class EyzController {
  @operation({
    summary: "Get Eyz",
  })
  @get()
  static getEyz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyz",
  })
  @post("{id}")
  static createEyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
