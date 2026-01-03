import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxfs")
export default class JxfController {
  @operation({
    summary: "Get Jxfs",
  })
  @get()
  static getJxfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxf",
  })
  @post("{id}")
  static createJxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
