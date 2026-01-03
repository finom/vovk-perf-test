import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdws")
export default class HdwController {
  @operation({
    summary: "Get Hdws",
  })
  @get()
  static getHdws = procedure({
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
