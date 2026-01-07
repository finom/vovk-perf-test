import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiv")
export default class EivController {
  @operation({
    summary: "Get Eiv",
  })
  @get()
  static getEiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eiv",
  })
  @post("{id}")
  static createEiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
