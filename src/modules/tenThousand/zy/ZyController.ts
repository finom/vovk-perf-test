import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zies")
export default class ZyController {
  @operation({
    summary: "Get Zies",
  })
  @get()
  static getZies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zy",
  })
  @post("{id}")
  static createZy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
