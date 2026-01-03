import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgcs")
export default class DgcController {
  @operation({
    summary: "Get Dgcs",
  })
  @get()
  static getDgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgc",
  })
  @post("{id}")
  static createDgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
