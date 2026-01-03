import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gucs")
export default class GucController {
  @operation({
    summary: "Get Gucs",
  })
  @get()
  static getGucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guc",
  })
  @post("{id}")
  static createGuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
