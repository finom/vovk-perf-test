import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inrs")
export default class InrController {
  @operation({
    summary: "Get Inrs",
  })
  @get()
  static getInrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inr",
  })
  @post("{id}")
  static createInr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
