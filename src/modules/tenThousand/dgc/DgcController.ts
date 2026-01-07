import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgc")
export default class DgcController {
  @operation({
    summary: "Get Dgc",
  })
  @get()
  static getDgc = procedure({
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
