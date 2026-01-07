import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brv")
export default class BrvController {
  @operation({
    summary: "Get Brv",
  })
  @get()
  static getBrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brv",
  })
  @post("{id}")
  static createBrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
