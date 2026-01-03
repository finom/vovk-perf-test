import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvbs")
export default class DvbController {
  @operation({
    summary: "Get Dvbs",
  })
  @get()
  static getDvbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvb",
  })
  @post("{id}")
  static createDvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
