import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alls")
export default class AllController {
  @operation({
    summary: "Get Alls",
  })
  @get()
  static getAlls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create All",
  })
  @post("{id}")
  static createAll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
