import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cohs")
export default class CohController {
  @operation({
    summary: "Get Cohs",
  })
  @get()
  static getCohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coh",
  })
  @post("{id}")
  static createCoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
