import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgis")
export default class BgiController {
  @operation({
    summary: "Get Bgis",
  })
  @get()
  static getBgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgi",
  })
  @post("{id}")
  static createBgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
