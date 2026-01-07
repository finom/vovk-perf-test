import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgy")
export default class KgyController {
  @operation({
    summary: "Get Kgy",
  })
  @get()
  static getKgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgy",
  })
  @post("{id}")
  static createKgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
