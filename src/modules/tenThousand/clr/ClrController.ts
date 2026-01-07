import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clr")
export default class ClrController {
  @operation({
    summary: "Get Clr",
  })
  @get()
  static getClr = procedure({
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
