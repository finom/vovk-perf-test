import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blds")
export default class BldController {
  @operation({
    summary: "Get Blds",
  })
  @get()
  static getBlds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bld",
  })
  @post("{id}")
  static createBld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
