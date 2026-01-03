import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bous")
export default class BouController {
  @operation({
    summary: "Get Bous",
  })
  @get()
  static getBous = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bou",
  })
  @post("{id}")
  static createBou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
