import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amrs")
export default class AmrController {
  @operation({
    summary: "Get Amrs",
  })
  @get()
  static getAmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amr",
  })
  @post("{id}")
  static createAmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
