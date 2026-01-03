import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aegs")
export default class AegController {
  @operation({
    summary: "Get Aegs",
  })
  @get()
  static getAegs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeg",
  })
  @post("{id}")
  static createAeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
