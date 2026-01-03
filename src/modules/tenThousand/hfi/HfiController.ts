import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfis")
export default class HfiController {
  @operation({
    summary: "Get Hfis",
  })
  @get()
  static getHfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfi",
  })
  @post("{id}")
  static createHfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
