import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eq")
export default class EqController {
  @operation({
    summary: "Get Eq",
  })
  @get()
  static getEq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eq",
  })
  @post("{id}")
  static createEq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
