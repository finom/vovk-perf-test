import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgj")
export default class DgjController {
  @operation({
    summary: "Get Dgj",
  })
  @get()
  static getDgj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgj",
  })
  @post("{id}")
  static createDgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
