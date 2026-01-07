import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efi")
export default class EfiController {
  @operation({
    summary: "Get Efi",
  })
  @get()
  static getEfi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efi",
  })
  @post("{id}")
  static createEfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
