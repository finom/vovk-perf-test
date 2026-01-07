import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdl")
export default class HdlController {
  @operation({
    summary: "Get Hdl",
  })
  @get()
  static getHdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdl",
  })
  @post("{id}")
  static createHdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
