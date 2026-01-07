import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvp")
export default class DvpController {
  @operation({
    summary: "Get Dvp",
  })
  @get()
  static getDvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvp",
  })
  @post("{id}")
  static createDvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
