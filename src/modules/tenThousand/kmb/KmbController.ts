import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmb")
export default class KmbController {
  @operation({
    summary: "Get Kmb",
  })
  @get()
  static getKmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmb",
  })
  @post("{id}")
  static createKmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
