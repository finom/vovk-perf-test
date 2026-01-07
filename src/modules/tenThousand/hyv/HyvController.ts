import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyv")
export default class HyvController {
  @operation({
    summary: "Get Hyv",
  })
  @get()
  static getHyv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyv",
  })
  @post("{id}")
  static createHyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
