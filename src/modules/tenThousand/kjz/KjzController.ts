import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjzs")
export default class KjzController {
  @operation({
    summary: "Get Kjzs",
  })
  @get()
  static getKjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjz",
  })
  @post("{id}")
  static createKjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
