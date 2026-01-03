import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcs")
export default class HcController {
  @operation({
    summary: "Get Hcs",
  })
  @get()
  static getHcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hc",
  })
  @post("{id}")
  static createHc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
