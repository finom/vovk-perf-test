import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmis")
export default class KmiController {
  @operation({
    summary: "Get Kmis",
  })
  @get()
  static getKmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmi",
  })
  @post("{id}")
  static createKmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
