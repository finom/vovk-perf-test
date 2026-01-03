import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvs")
export default class HvsController {
  @operation({
    summary: "Get Hvs",
  })
  @get()
  static getHvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvs",
  })
  @post("{id}")
  static createHvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
