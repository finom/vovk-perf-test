import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvzs")
export default class DvzController {
  @operation({
    summary: "Get Dvzs",
  })
  @get()
  static getDvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvz",
  })
  @post("{id}")
  static createDvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
