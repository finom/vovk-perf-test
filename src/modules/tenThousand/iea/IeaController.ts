import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieas")
export default class IeaController {
  @operation({
    summary: "Get Ieas",
  })
  @get()
  static getIeas = procedure({
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
