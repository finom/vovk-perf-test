import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdw")
export default class HdwController {
  @operation({
    summary: "Get Hdw",
  })
  @get()
  static getHdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdw",
  })
  @post("{id}")
  static createHdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
