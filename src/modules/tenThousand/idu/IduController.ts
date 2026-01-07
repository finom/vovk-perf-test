import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idu")
export default class IduController {
  @operation({
    summary: "Get Idu",
  })
  @get()
  static getIdu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idu",
  })
  @post("{id}")
  static createIdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
