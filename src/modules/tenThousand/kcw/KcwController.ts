import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcw")
export default class KcwController {
  @operation({
    summary: "Get Kcw",
  })
  @get()
  static getKcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcw",
  })
  @post("{id}")
  static createKcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
