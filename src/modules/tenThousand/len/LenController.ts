import { procedure, prefix, get, post, operation } from "vovk";

@prefix("len")
export default class LenController {
  @operation({
    summary: "Get Len",
  })
  @get()
  static getLen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Len",
  })
  @post("{id}")
  static createLen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
