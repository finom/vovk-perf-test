import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byb")
export default class BybController {
  @operation({
    summary: "Get Byb",
  })
  @get()
  static getByb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byb",
  })
  @post("{id}")
  static createByb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
