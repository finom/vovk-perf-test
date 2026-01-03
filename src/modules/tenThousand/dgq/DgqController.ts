import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgqs")
export default class DgqController {
  @operation({
    summary: "Get Dgqs",
  })
  @get()
  static getDgqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgq",
  })
  @post("{id}")
  static createDgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
