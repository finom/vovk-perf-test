import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blw")
export default class BlwController {
  @operation({
    summary: "Get Blw",
  })
  @get()
  static getBlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blw",
  })
  @post("{id}")
  static createBlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
