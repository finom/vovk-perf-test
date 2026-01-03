import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaes")
export default class EaeController {
  @operation({
    summary: "Get Eaes",
  })
  @get()
  static getEaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eae",
  })
  @post("{id}")
  static createEae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
