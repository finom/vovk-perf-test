import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duns")
export default class DunController {
  @operation({
    summary: "Get Duns",
  })
  @get()
  static getDuns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dun",
  })
  @post("{id}")
  static createDun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
