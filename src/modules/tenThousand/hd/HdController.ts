import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hd")
export default class HdController {
  @operation({
    summary: "Get Hd",
  })
  @get()
  static getHd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hd",
  })
  @post("{id}")
  static createHd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
