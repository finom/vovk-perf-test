import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcts")
export default class DctController {
  @operation({
    summary: "Get Dcts",
  })
  @get()
  static getDcts = procedure({
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
