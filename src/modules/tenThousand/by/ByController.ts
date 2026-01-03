import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bies")
export default class ByController {
  @operation({
    summary: "Get Bies",
  })
  @get()
  static getBies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create By",
  })
  @post("{id}")
  static createBy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
