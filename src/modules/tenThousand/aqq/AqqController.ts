import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqq")
export default class AqqController {
  @operation({
    summary: "Get Aqq",
  })
  @get()
  static getAqq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqq",
  })
  @post("{id}")
  static createAqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
