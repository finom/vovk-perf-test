import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaps")
export default class EapController {
  @operation({
    summary: "Get Eaps",
  })
  @get()
  static getEaps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eap",
  })
  @post("{id}")
  static createEap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
