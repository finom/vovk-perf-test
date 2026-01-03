import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajzs")
export default class AjzController {
  @operation({
    summary: "Get Ajzs",
  })
  @get()
  static getAjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajz",
  })
  @post("{id}")
  static createAjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
