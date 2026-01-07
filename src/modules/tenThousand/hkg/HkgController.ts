import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkg")
export default class HkgController {
  @operation({
    summary: "Get Hkg",
  })
  @get()
  static getHkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkg",
  })
  @post("{id}")
  static createHkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
