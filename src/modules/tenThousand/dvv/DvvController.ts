import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvvs")
export default class DvvController {
  @operation({
    summary: "Get Dvvs",
  })
  @get()
  static getDvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvv",
  })
  @post("{id}")
  static createDvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
