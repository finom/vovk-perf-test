import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlds")
export default class MldController {
  @operation({
    summary: "Get Mlds",
  })
  @get()
  static getMlds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mld",
  })
  @post("{id}")
  static createMld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
