import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcus")
export default class KcuController {
  @operation({
    summary: "Get Kcus",
  })
  @get()
  static getKcus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcu",
  })
  @post("{id}")
  static createKcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
