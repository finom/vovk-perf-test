import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcg")
export default class HcgController {
  @operation({
    summary: "Get Hcg",
  })
  @get()
  static getHcg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcg",
  })
  @post("{id}")
  static createHcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
