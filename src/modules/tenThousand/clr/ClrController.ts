import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clrs")
export default class ClrController {
  @operation({
    summary: "Get Clrs",
  })
  @get()
  static getClrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clr",
  })
  @post("{id}")
  static createClr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
