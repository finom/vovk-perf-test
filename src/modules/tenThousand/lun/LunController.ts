import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lun")
export default class LunController {
  @operation({
    summary: "Get Lun",
  })
  @get()
  static getLun = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lun",
  })
  @post("{id}")
  static createLun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
