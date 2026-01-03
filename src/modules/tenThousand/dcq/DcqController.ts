import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcqs")
export default class DcqController {
  @operation({
    summary: "Get Dcqs",
  })
  @get()
  static getDcqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcq",
  })
  @post("{id}")
  static createDcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
