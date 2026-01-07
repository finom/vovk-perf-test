import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfr")
export default class KfrController {
  @operation({
    summary: "Get Kfr",
  })
  @get()
  static getKfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfr",
  })
  @post("{id}")
  static createKfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
