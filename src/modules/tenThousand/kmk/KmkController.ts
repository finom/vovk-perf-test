import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmks")
export default class KmkController {
  @operation({
    summary: "Get Kmks",
  })
  @get()
  static getKmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmk",
  })
  @post("{id}")
  static createKmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
