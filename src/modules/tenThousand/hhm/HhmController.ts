import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhms")
export default class HhmController {
  @operation({
    summary: "Get Hhms",
  })
  @get()
  static getHhms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhm",
  })
  @post("{id}")
  static createHhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
