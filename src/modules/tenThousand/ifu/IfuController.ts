import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifus")
export default class IfuController {
  @operation({
    summary: "Get Ifus",
  })
  @get()
  static getIfus = procedure({
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
