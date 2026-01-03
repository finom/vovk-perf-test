import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cshes")
export default class CshController {
  @operation({
    summary: "Get Cshes",
  })
  @get()
  static getCshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csh",
  })
  @post("{id}")
  static createCsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
