import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfrs")
export default class KfrController {
  @operation({
    summary: "Get Kfrs",
  })
  @get()
  static getKfrs = procedure({
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
