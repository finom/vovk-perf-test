import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhm")
export default class HhmController {
  @operation({
    summary: "Get Hhm",
  })
  @get()
  static getHhm = procedure({
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
