import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvq")
export default class DvqController {
  @operation({
    summary: "Get Dvq",
  })
  @get()
  static getDvq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvq",
  })
  @post("{id}")
  static createDvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
