import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dju")
export default class DjuController {
  @operation({
    summary: "Get Dju",
  })
  @get()
  static getDju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dju",
  })
  @post("{id}")
  static createDju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
