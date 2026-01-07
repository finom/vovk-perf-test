import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxb")
export default class CxbController {
  @operation({
    summary: "Get Cxb",
  })
  @get()
  static getCxb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxb",
  })
  @post("{id}")
  static createCxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
