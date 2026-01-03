import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvqs")
export default class DvqController {
  @operation({
    summary: "Get Dvqs",
  })
  @get()
  static getDvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvq",
  })
  @post("{id}")
  static createDvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
