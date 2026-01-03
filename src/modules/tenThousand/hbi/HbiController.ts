import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbis")
export default class HbiController {
  @operation({
    summary: "Get Hbis",
  })
  @get()
  static getHbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbi",
  })
  @post("{id}")
  static createHbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
