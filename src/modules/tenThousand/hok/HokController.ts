import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoks")
export default class HokController {
  @operation({
    summary: "Get Hoks",
  })
  @get()
  static getHoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hok",
  })
  @post("{id}")
  static createHok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
