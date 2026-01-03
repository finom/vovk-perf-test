import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnms")
export default class HnmController {
  @operation({
    summary: "Get Hnms",
  })
  @get()
  static getHnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnm",
  })
  @post("{id}")
  static createHnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
