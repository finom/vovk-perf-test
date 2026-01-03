import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgls")
export default class DglController {
  @operation({
    summary: "Get Dgls",
  })
  @get()
  static getDgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgl",
  })
  @post("{id}")
  static createDgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
