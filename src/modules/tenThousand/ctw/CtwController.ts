import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctw")
export default class CtwController {
  @operation({
    summary: "Get Ctw",
  })
  @get()
  static getCtw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctw",
  })
  @post("{id}")
  static createCtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
