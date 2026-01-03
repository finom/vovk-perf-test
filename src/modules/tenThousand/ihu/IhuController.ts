import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihus")
export default class IhuController {
  @operation({
    summary: "Get Ihus",
  })
  @get()
  static getIhus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihu",
  })
  @post("{id}")
  static createIhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
