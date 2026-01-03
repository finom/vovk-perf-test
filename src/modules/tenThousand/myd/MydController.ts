import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myds")
export default class MydController {
  @operation({
    summary: "Get Myds",
  })
  @get()
  static getMyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myd",
  })
  @post("{id}")
  static createMyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
