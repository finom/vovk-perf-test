import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgw")
export default class DgwController {
  @operation({
    summary: "Get Dgw",
  })
  @get()
  static getDgw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgw",
  })
  @post("{id}")
  static createDgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
