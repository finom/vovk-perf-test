import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxu")
export default class CxuController {
  @operation({
    summary: "Get Cxu",
  })
  @get()
  static getCxu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxu",
  })
  @post("{id}")
  static createCxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
