import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifz")
export default class IfzController {
  @operation({
    summary: "Get Ifz",
  })
  @get()
  static getIfz = procedure({
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
