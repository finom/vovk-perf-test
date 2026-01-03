import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrvs")
export default class MrvController {
  @operation({
    summary: "Get Mrvs",
  })
  @get()
  static getMrvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrv",
  })
  @post("{id}")
  static createMrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
