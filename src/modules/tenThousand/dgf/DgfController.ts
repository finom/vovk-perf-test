import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgfs")
export default class DgfController {
  @operation({
    summary: "Get Dgfs",
  })
  @get()
  static getDgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgf",
  })
  @post("{id}")
  static createDgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
