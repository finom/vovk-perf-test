import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifzs")
export default class IfzController {
  @operation({
    summary: "Get Ifzs",
  })
  @get()
  static getIfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifz",
  })
  @post("{id}")
  static createIfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
