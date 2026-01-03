import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcws")
export default class HcwController {
  @operation({
    summary: "Get Hcws",
  })
  @get()
  static getHcws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcw",
  })
  @post("{id}")
  static createHcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
