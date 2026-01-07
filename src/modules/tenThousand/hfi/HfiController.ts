import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfi")
export default class HfiController {
  @operation({
    summary: "Get Hfi",
  })
  @get()
  static getHfi = procedure({
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
