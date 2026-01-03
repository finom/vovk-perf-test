import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqis")
export default class CqiController {
  @operation({
    summary: "Get Cqis",
  })
  @get()
  static getCqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqi",
  })
  @post("{id}")
  static createCqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
