import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knbs")
export default class KnbController {
  @operation({
    summary: "Get Knbs",
  })
  @get()
  static getKnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knb",
  })
  @post("{id}")
  static createKnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
