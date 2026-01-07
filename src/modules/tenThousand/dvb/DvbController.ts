import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvb")
export default class DvbController {
  @operation({
    summary: "Get Dvb",
  })
  @get()
  static getDvb = procedure({
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
