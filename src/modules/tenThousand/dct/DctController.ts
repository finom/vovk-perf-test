import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dct")
export default class DctController {
  @operation({
    summary: "Get Dct",
  })
  @get()
  static getDct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dct",
  })
  @post("{id}")
  static createDct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
