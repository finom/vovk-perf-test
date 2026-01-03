import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aszs")
export default class AszController {
  @operation({
    summary: "Get Aszs",
  })
  @get()
  static getAszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asz",
  })
  @post("{id}")
  static createAsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
