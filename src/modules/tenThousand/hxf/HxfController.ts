import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxfs")
export default class HxfController {
  @operation({
    summary: "Get Hxfs",
  })
  @get()
  static getHxfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxf",
  })
  @post("{id}")
  static createHxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
