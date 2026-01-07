import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgz")
export default class DgzController {
  @operation({
    summary: "Get Dgz",
  })
  @get()
  static getDgz = procedure({
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
