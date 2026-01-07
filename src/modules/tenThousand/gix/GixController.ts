import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gix")
export default class GixController {
  @operation({
    summary: "Get Gix",
  })
  @get()
  static getGix = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gix",
  })
  @post("{id}")
  static createGix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
