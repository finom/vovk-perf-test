import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsus")
export default class BsuController {
  @operation({
    summary: "Get Bsus",
  })
  @get()
  static getBsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsu",
  })
  @post("{id}")
  static createBsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
