import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvps")
export default class DvpController {
  @operation({
    summary: "Get Dvps",
  })
  @get()
  static getDvps = procedure({
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
