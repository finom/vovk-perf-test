import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdms")
export default class HdmController {
  @operation({
    summary: "Get Hdms",
  })
  @get()
  static getHdms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdm",
  })
  @post("{id}")
  static createHdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
