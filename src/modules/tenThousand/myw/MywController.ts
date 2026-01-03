import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myws")
export default class MywController {
  @operation({
    summary: "Get Myws",
  })
  @get()
  static getMyws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myw",
  })
  @post("{id}")
  static createMyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
