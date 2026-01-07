import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvv")
export default class DvvController {
  @operation({
    summary: "Get Dvv",
  })
  @get()
  static getDvv = procedure({
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
