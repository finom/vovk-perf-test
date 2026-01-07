import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guv")
export default class GuvController {
  @operation({
    summary: "Get Guv",
  })
  @get()
  static getGuv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guv",
  })
  @post("{id}")
  static createGuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
