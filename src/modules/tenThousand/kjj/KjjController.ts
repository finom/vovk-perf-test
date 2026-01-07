import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjj")
export default class KjjController {
  @operation({
    summary: "Get Kjj",
  })
  @get()
  static getKjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjj",
  })
  @post("{id}")
  static createKjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
