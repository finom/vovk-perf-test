import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivs")
export default class IvsController {
  @operation({
    summary: "Get Ivs",
  })
  @get()
  static getIvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivs",
  })
  @post("{id}")
  static createIvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
