import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsf")
export default class HsfController {
  @operation({
    summary: "Get Hsf",
  })
  @get()
  static getHsf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsf",
  })
  @post("{id}")
  static createHsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
