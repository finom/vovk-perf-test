import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luns")
export default class LunController {
  @operation({
    summary: "Get Luns",
  })
  @get()
  static getLuns = procedure({
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
