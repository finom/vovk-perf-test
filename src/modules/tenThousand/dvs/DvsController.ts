import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvs")
export default class DvsController {
  @operation({
    summary: "Get Dvs",
  })
  @get()
  static getDvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvs",
  })
  @post("{id}")
  static createDvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
