import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvf")
export default class DvfController {
  @operation({
    summary: "Get Dvf",
  })
  @get()
  static getDvf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvf",
  })
  @post("{id}")
  static createDvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
