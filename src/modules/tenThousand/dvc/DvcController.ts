import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvcs")
export default class DvcController {
  @operation({
    summary: "Get Dvcs",
  })
  @get()
  static getDvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvc",
  })
  @post("{id}")
  static createDvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
