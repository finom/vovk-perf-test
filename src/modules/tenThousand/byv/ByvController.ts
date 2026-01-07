import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byv")
export default class ByvController {
  @operation({
    summary: "Get Byv",
  })
  @get()
  static getByv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byv",
  })
  @post("{id}")
  static createByv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
