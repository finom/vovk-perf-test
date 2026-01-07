import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxc")
export default class CxcController {
  @operation({
    summary: "Get Cxc",
  })
  @get()
  static getCxc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxc",
  })
  @post("{id}")
  static createCxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
