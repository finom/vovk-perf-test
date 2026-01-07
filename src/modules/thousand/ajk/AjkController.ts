import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajk")
export default class AjkController {
  @operation({
    summary: "Get Ajk",
  })
  @get()
  static getAjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajk",
  })
  @post("{id}")
  static createAjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
