import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoks")
export default class AokController {
  @operation({
    summary: "Get Aoks",
  })
  @get()
  static getAoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aok",
  })
  @post("{id}")
  static createAok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
