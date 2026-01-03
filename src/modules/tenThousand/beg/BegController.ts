import { procedure, prefix, get, post, operation } from "vovk";

@prefix("begs")
export default class BegController {
  @operation({
    summary: "Get Begs",
  })
  @get()
  static getBegs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beg",
  })
  @post("{id}")
  static createBeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
