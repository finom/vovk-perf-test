import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyy")
export default class HyyController {
  @operation({
    summary: "Get Hyy",
  })
  @get()
  static getHyy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyy",
  })
  @post("{id}")
  static createHyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
