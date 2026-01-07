import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iae")
export default class IaeController {
  @operation({
    summary: "Get Iae",
  })
  @get()
  static getIae = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iae",
  })
  @post("{id}")
  static createIae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
