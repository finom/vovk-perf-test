import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsvs")
export default class DsvController {
  @operation({
    summary: "Get Dsvs",
  })
  @get()
  static getDsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsv",
  })
  @post("{id}")
  static createDsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
