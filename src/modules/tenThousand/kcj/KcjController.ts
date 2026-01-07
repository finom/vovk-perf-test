import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcj")
export default class KcjController {
  @operation({
    summary: "Get Kcj",
  })
  @get()
  static getKcj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcj",
  })
  @post("{id}")
  static createKcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
