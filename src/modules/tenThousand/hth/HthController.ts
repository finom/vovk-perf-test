import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hths")
export default class HthController {
  @operation({
    summary: "Get Hths",
  })
  @get()
  static getHths = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hth",
  })
  @post("{id}")
  static createHth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
