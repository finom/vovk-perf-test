import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iea")
export default class IeaController {
  @operation({
    summary: "Get Iea",
  })
  @get()
  static getIea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iea",
  })
  @post("{id}")
  static createIea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
