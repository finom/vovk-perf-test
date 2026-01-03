import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgzs")
export default class DgzController {
  @operation({
    summary: "Get Dgzs",
  })
  @get()
  static getDgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgz",
  })
  @post("{id}")
  static createDgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
