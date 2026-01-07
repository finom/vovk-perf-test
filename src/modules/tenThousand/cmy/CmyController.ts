import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmy")
export default class CmyController {
  @operation({
    summary: "Get Cmy",
  })
  @get()
  static getCmy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmy",
  })
  @post("{id}")
  static createCmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
