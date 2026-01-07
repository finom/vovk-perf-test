import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ew")
export default class EwController {
  @operation({
    summary: "Get Ew",
  })
  @get()
  static getEw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ew",
  })
  @post("{id}")
  static createEw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
