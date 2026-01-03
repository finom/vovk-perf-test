import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abes")
export default class AbeController {
  @operation({
    summary: "Get Abes",
  })
  @get()
  static getAbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abe",
  })
  @post("{id}")
  static createAbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
