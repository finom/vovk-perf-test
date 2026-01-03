import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgjs")
export default class DgjController {
  @operation({
    summary: "Get Dgjs",
  })
  @get()
  static getDgjs = procedure({
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
