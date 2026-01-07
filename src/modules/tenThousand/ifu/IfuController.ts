import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifu")
export default class IfuController {
  @operation({
    summary: "Get Ifu",
  })
  @get()
  static getIfu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifu",
  })
  @post("{id}")
  static createIfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
