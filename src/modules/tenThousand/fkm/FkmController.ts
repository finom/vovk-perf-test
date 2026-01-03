import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkms")
export default class FkmController {
  @operation({
    summary: "Get Fkms",
  })
  @get()
  static getFkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkm",
  })
  @post("{id}")
  static createFkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
