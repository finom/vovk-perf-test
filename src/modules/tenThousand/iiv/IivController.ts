import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iivs")
export default class IivController {
  @operation({
    summary: "Get Iivs",
  })
  @get()
  static getIivs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iiv",
  })
  @post("{id}")
  static createIiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
