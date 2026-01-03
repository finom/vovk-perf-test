import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcbs")
export default class HcbController {
  @operation({
    summary: "Get Hcbs",
  })
  @get()
  static getHcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcb",
  })
  @post("{id}")
  static createHcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
